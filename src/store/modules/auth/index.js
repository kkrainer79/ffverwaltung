import axios from "axios";
import firebase from "@/config/firebase";
import { EventBus } from "@/event-bus";

let timer;

const state = {
  userId: null,
  idToken: null,
  refreshToken: null,
};

const getters = {
  isAuthenticated: (state) => !!state.idToken,
  idToken: (state) => state.idToken,
};

const mutations = {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.idToken = payload.idToken;
    state.refreshToken = payload.refreshToken;
    state.stayLoggedIn = payload.stayLoggedIn;
  },
};

const actions = {
  logIn(context, payload) {
    const userObject = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };

    return axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase._options.apiKey}`,
        userObject
      )
      .then((response) => {
        const expiresIn = Number(response.data.expiresIn) * 1000;
        const expDate = new Date().getTime() + expiresIn;

        localStorage.setItem("idToken", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("expireDate", expDate);
        localStorage.setItem("stayLoggedIn", payload.stayLoggedIn);

        if (!payload.stayLoggedIn) {
          timer = setTimeout(() => {
            context.dispatch("autoLogOut");
          }, expiresIn);
        }

        context.commit("setUser", {
          userId: response.data.localId,
          idToken: response.data.idToken,
          refreshToken: response.data.refreshToken,

        });
      })
      .catch((error) => {
        const errorMessage = new Error(
          error.response.data.error.message || "UNKNOWN_ERROR"
        );
        throw errorMessage;
      });

  },

  autoLogIn(context) {
    if (!localStorage.getItem("idToken")) {
      return;
    }
    //Berechnung der verbleibenden Gültigkeitsdauer
    const expDate = localStorage.getItem("expireDate");
    let timeLeft = Number(expDate) - new Date().getTime();

    //Wenn Gültigkeitsdauer <10.000 (== 10 sec), d.h. idToken ist abgelaufen:
    if (timeLeft < 10000) {
      const refreshToken = localStorage.getItem("refreshToken");
      const refreshObject = {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      };

      axios
        .post(
          `https://securetoken.googleapis.com/v1/token?key=${firebase._options.apiKey}`,
          refreshObject
        )
        .then((response) => {
          //Berechnung und setzen des neuen Ablaufzeitpunktes im lokalen Speicher
          const expiresIn = Number(response.data.expires_in) * 1000;
          const expDate = new Date().getTime() + expiresIn;
          localStorage.setItem("expireDate", expDate);

          //Aktualisierung des idTokens im lokalen Speicher sowie im Store:
          localStorage.setItem("idToken", response.data.id_token);
          context.commit("setUser", {
            idToken: response.data.id_Token,
            userId: response.data.user_id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    /* Wenn User NICHT eingeloggt bleiben will (Checkbock Login-Page), 
    startet der Timer für den Auto-Logout (1 Stunde) neu*/
    if (localStorage.getItem("stayLoggedIn") === "false") {
      timeLeft = 3600000;
      timer = setTimeout(() => {
        context.dispatch("autoLogOut");
      }, timeLeft);
    }

    const userId = localStorage.getItem("userId");
    const idToken = localStorage.getItem("idToken");

    if (idToken && userId) {
      context.commit("setUser", {
        idToken: idToken,
        userId: userId,
      });
    }
  },

  logOut(context) {
    localStorage.removeItem("idToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("expireDate");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("stayLoggedIn");

    clearTimeout(timer);

    context.commit("setUser", {
      idToken: null,
      userId: null,
      refreshToken: null,
    });
  },
  autoLogOut(context) {
    this.$router.push({ name: "LoginPage" });
    context.dispatch("logOut");
    EventBus.emit("notify", {
      type: "success",
      title: "Sie wurden abgemeldet",
      message: "Aufgrund eines Timeouts wurden Sie vom Serviceportal abgemeldet.",
      subMessage: "Bitte melden Sie sich neu an.",
      iconAsButton: true,
      action: "close",
      icon: "faIcon fa-solid fa-circle-check",
      timeOut: false,
      componentName: "",
    });
  },
};

const authModule = {
  state,
  mutations,
  getters,
  actions,
};

export default authModule;
