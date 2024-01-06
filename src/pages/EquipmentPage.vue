<template>
  <div>
    <transition
      name="fade"
      mode="out-in"
      appear
      @changeComponent="changeComponent"
    >
      <component :is="componentName" :itemId="this.itemId"></component>
    </transition>
  </div>
</template>

<script>
import EquipmentNew from "@components/Equipment/EquipmentNew.vue";
import EquipmentTable from "@components/Equipment/EquipmentTable.vue";
import EquipmentDetail from "@components/Equipment/EquipmentDetail.vue";
import EquipmentReview from "@components/Equipment/EquipmentReview.vue";


export default {
  name: "EquipmentPage",
  data() {
    return {
      showForm: false,
      componentName: "EquipmentTable",
      itemId: 0,
    };
  },

  components: {
    EquipmentNew,
    EquipmentTable,
    EquipmentDetail,
    EquipmentReview,
  },

  computed: {},

  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
      this.itemId = payload.id;
    },
  },

  created() {

  },
};
</script>

<style scoped></style>
