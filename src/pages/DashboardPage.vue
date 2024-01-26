<template>
  <div class="container-flex">
    <the-nav-bar @changeComponent="changeComponent"></the-nav-bar>
    <div class="container">
      <h1 class="offset-1">DASHBOARD</h1>
      <div class="row">
        <div class="col d-none d-lg-block">
          <div class="card" @click="changeComponent({componentName: 'EquipmentPage'})">
            <div class="card-header">EQUIPMENT</div>
            <div type="button" class="card-body">Zur Equipment-Übersicht</div>
          </div>
        </div>
        <div class="col d-none d-lg-block">
          <div class="card" @click="changeComponent({componentName: 'ClothingPage'})">
            <div class="card-header">BEKLEIDUNG</div>
            <div type="button" class="card-body">Zur Bekleidungs-Übersicht</div>
          </div>
        </div>
        <div class="col-10 offset-1 d-lg-none">
          <div class="card" @click="changeComponent({componentName: 'EquipmentReview'})">
            <div class="card-header">WARTUNG ERFASSEN</div>
            <div type="button" class="card-body">Equipment suchen und warten</div>
          </div>
        </div>
        <div class="col-10 offset-1 mt-4 d-lg-none">
          <div class="card" @click="changeComponent({componentName: 'EquipmentNew'})">
            <div class="card-header">EQUIPMENT ERFASSEN</div>
            <div type="button" class="card-body">Equipment neu hinzufügen</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from "@components/TheNavBar.vue";

export default {
  name: "DashboardPage",
  components: {
    TheNavBar,
  },
  data() {
    return {
      itemId: "0",
    }
  },

  methods: {
    changeComponent(payload) {
      this.$router.push({
            name: payload.componentName,
            params: { id: this.itemId },
            props: { id: this.itemId },
          });
    },
  },
  async mounted() {
    await this.$store.dispatch("getNewId");
    await this.$store.dispatch("getData");
  },
};
</script>

<style scoped></style>
