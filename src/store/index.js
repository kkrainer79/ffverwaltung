import { createStore } from "vuex";
import authModule from "./modules/auth";
import storageModule from "./modules/storage";

const state = {};

const mutations = {};

const actions = {};

const getters = {};

const store = createStore({
  state,
  mutations,
  actions,
  getters,

  modules: {
    auth: authModule,
    storage: storageModule,
  },
});

export default store;
