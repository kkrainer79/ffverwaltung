<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <div>
        <div class="container-fluid vh-100 vw-100 bg-sm login-container">
          <div>
            <div class="row">
              <div class="col-12">
                <img
                  src="@assets/logo.png"
                  class="container my-3 py-5 pic-center"
                  alt="Logo der FF Preding"
                />
              </div>
            </div>
            <div class="row">
              <div class="fs-3">Willkommen im</div>
            </div>
            <div class="row">
              <div class="headline display-3">Serviceportal</div>
            </div>
            <div class="row">
              <div class="fs-3 mb-5">der Feuerwehr Preding</div>
            </div>
          </div>

          <Form
            class="text-start"
            @submit="submitData"
            :validation-schema="schema"
          >
            <div class="form-row d-flex align-items-center justify-content-center">
              <div class="form-group col-lg-2 col-md-4 col-sm-6 col-xs-10">
                <label for="email">Benutzer</label>
                <Field
                  as="input"
                  name="email"
                  type="email"
                  class="form-control"
                  id="email"
                />
                <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
              </div>
            </div>
            <div class="form-row d-flex align-items-center justify-content-center">
              <div class="form-group col-lg-2 col-md-4 col-sm-6 col-xs-10 mt-2">
                <label for="password">Passwort </label>
                <Field
                  as="input"
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                />
                <!-- <small class="text-danger" v-if="errors.password"
              >{{ errors.password }}
            </small> -->
              </div>
            </div>
            <div class="form-row d-flex align-items-center justify-content-center">
              <div class="form-group col-lg-2 col-md-4 col-sm-6 col-xs-10 mt-2">
                <input
                  type="checkbox"
                  class="mr-2"
                  :checked="stayLoggedIn"
                  @change="setAutoLogin"
                />
                <a @click="setAutoLogin"
                  ><label type="button" class="input-label"
                    >eingeloggt bleiben</label
                  ></a
                >
              </div>
            </div>
            <div class="form-row mt-4 d-flex align-items-center justify-content-center">
              <div class="form-group col-lg-2 col-md-4 col-sm-6 col-xs-10">
                <div class="d-grid">
                  <button class="btn btn-ffp">
                    <span v-if="!isLoading">Login</span>
                    <span
                      v-else
                      class="spinner-border spinner-border-sm"
                    ></span>
                  </button>
                </div>
                <div class="col-10 offset-1 text-danger text-center mt-2">
                  <small v-if="error">{{ errorText }}</small>
                </div>
              </div>
            </div>
          </Form>
          <div class=".align-text-bottom col-10 offset-1">
            <small>&copy; LM d.V. Klaus Krainer, MSc | FF Preding</small>
          </div>
        </div>
      </div>
    </transition>
    <UserNotification></UserNotification>
  </div>
</template>

<script>
import UserNotification from "@/components/Tools/UserNotification.vue";
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: "LoginPage",
  components: {
    Form,
    Field,
    UserNotification,
  },
  data() {
    //Validierung mit YUP und Vee-Validate
    const schema = yup.object().shape({
      email: yup
        .string() //Eingabe ist ein String
        .required("E-Mail-Adresse wird benötigt!")
        .trim() //entfernt Leerzeichen
        .email("Keine gültige E-Mail-Adresse!"), //prüft Mail-Schema
      password: yup.string().required("Passwort wird benötigt!"),

      //Prüfung für mögliche zukünfgie REGISTRIERUNG:
      //Zahl(en), lower case, upper case, Sonderzeichen (\W) und KEINE Leerzeichen (REGEX-AUSDRUCK)
      //.matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/, {message: "Passwort muss beinhalten: Kleinbuchstaben, Großbuchstaben, Zahlen, Sonderzeichen, min. 8 Zeichen"})
      //.min(8),
    });

    return {
      schema,
      error: "",
      isLoading: false,
      stayLoggedIn: false,
    };
  },

  computed: {
    errorText() {
      if (this.error) {
        return "Benutzername und/oder Passwort falsch!";
      }
      return "Unbekannter Fehler";
    },
  },
  methods: {
    setAutoLogin() {
      this.stayLoggedIn = !this.stayLoggedIn;
    },

    async submitData(values) {
      this.isLoading = true;
      this.error = "";
      this.$store
        .dispatch("logIn", {
          email: values.email,
          password: values.password,
          stayLoggedIn: this.stayLoggedIn,
        })
        .then(() => {
          this.loadData();
        })
        .then(() => {
          this.$router.push({ name: "DashboardPage" });
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error: " + error);
          this.error = error;
          this.isLoading = false;
        });
    },
    async loadData() {
      await this.$store.dispatch("getNewId");
      await this.$store.dispatch("getData");
    },
  },
};
</script>

<style scoped></style>
