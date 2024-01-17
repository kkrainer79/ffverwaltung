import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@pages/LoginPage.vue";
import EquipmentPage from "@pages/EquipmentPage.vue";
import EquipmentNew from "@components/Equipment/EquipmentNew.vue";
import EquipmentDetail from "@components/Equipment/EquipmentDetail.vue";
import EquipmentReview from "@components/Equipment/EquipmentReview.vue";
import DashboardPage from "@pages/DashboardPage.vue";
import AtemschutzPage from "@pages/AtemschutzPage.vue";
import ClothingPage from "@pages/ClothingPage.vue";
import store from "@/store/index.js";

const routes = [
  {
    name: "LoginPage",
    path: "/",
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next("/dashboard");
      } else {
        next();
      }
    },
  },

//MENU-PAGES
  {
    name: "DashboardPage",
    path: "/dashboard",
    component: DashboardPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "EquipmentPage",
    path: "/equipment",
    component: EquipmentPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AtemschutzPage",
    path: "/atemschutz",
    component: AtemschutzPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "ClothingPage",
    path: "/clothing",
    component: ClothingPage,
    meta: {
      requiresAuth: true,
    },
  },

  //EQUIPMENT-SUBPAGES
  {
    name: "EquipmentNew",
    path: "/equipment/new",
    component: EquipmentNew,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "EquipmentEdit",
    path: "/equipment/edit/:id",
    component: EquipmentNew,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "EquipmentDetail",
    path: "/equipment/:id",
    component: EquipmentDetail,
    props: {EquipmentDetail: true},
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "EquipmentReview",
    path: "/equipment/review/:id",
    component: EquipmentReview,
    props: {EquipmentReview: true},
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
    next({ name: "LoginPage" });
  } else next();
});

export default router;
