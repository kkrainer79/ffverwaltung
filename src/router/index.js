import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@pages/LoginPage.vue";
import PortalPage from "@pages/PortalPage.vue";
import store from "@/store/index.js";

const routes = [
  {
    name: "loginPage",
    path: "/",
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next("/portal");
      } else {
        next();
      }
    }
  },
  {
    name: "portalPage",
    path: "/portal",
    component: PortalPage,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// GLOBALER NAVIGATION GUARD
// greift auf "requiresAuth" im meta-Attribut der Routes zu
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: "loginPage" });
  } else next();
});

export default router;
