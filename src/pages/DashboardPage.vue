<template>
  <div class="container-flex">
    <the-nav-bar @changeComponent="changeComponent"></the-nav-bar>
    <div class="container">
      <h1>DASHBOARD</h1>
        <div class="row">
          <div class="col-4">
            <div class="card" @click="changeComponent('EquipmentPage')">
              <div class="card-header">EQUIPMENT</div>
              <div type="button" class="card-body">Zur Equipment-Übersicht</div>
            </div>
          </div>
          <div class="col-4">
            <div class="card" @click="changeComponent('ClothingPage')">
              <div class="card-header">BEKLEIDUNG</div>
              <div type="button" class="card-body">
                Zur Bekleidungs-Übersicht
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserNotification></UserNotification>
    </div>

</template>

<script>
import TheNavBar from "@components/TheNavBar.vue";
import UserNotification from "@/components/Tools/UserNotification.vue";

export default {
  name: "DashboardPage",
  components: {
   UserNotification,
    TheNavBar,

  },
  methods: {
    changeComponent(componentName) {
      this.$router.push({name: componentName});
    },
  },
  async mounted() {
      await this.$store.dispatch("getNewId");
      await this.$store.dispatch("getData");
    },
};
</script>

<style scoped></style>
