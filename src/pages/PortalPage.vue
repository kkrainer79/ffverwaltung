<template>
  <div class="container-flex">
    <the-nav-bar @change-component="changeComponent"></the-nav-bar>
    <div class="container mt-3">
      <transition name="fade" mode="out-in">
        <component :is="componentName" @changeComponent="changeComponent"></component>
      </transition>
    </div>
    <transition name="fade">
      <user-notification />
    </transition>
  </div>
</template>

<script>
import DashboardPage from "@pages/DashboardPage.vue";
import ClothingPage from "@pages/ClothingPage.vue";
import EquipmentPage from "@pages/EquipmentPage.vue";
import AtemschutzPage from "@pages/AtemschutzPage.vue";
import TheNavBar from "@components/TheNavBar.vue";
import UserNotification from "@components/Tools/UserNotification.vue";

export default {
  name: "PortalPage",
  data() {
    return {
      componentName: "dashboardPage",
    };
  },

  components: {
    TheNavBar,
    DashboardPage,
    ClothingPage,
    EquipmentPage,
    AtemschutzPage,
    UserNotification,
  },

  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
  async mounted() {
      await this.$store.dispatch("getEquipmentId");
      await this.$store.dispatch("getData");
    },
};

</script>

<style scoped></style>
