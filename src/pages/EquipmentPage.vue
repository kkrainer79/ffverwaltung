<template>
  <div>
    <transition
      name="fade"
      mode="out-in"
      appear
      @changeComponent="changeComponent"
    >
      <component
        :is="componentName"
        :itemId="this.itemId"
        :title="this.tableTitle"
        :columnTitles="this.columnTitles"
        :defaultFilters="this.filters"
        :tableData="this.setTableData"
      ></component>
    </transition>
    <FloatingActionButton
      :fabMenus="fabFunctions"
      @emitUserInput="fabListener"
    ></FloatingActionButton>
  </div>
</template>

<script>
import EquipmentNew from "@components/Equipment/EquipmentNew.vue";
import FlexTable from "@components/Tools/FlexTable.vue";
import EquipmentDetail from "@components/Equipment/EquipmentDetail.vue";
import EquipmentReview from "@components/Equipment/EquipmentReview.vue";
import FloatingActionButton from "@components/Tools/FloatingActionButton.vue";
import store from "@store/index.js";

export default {
  name: "EquipmentPage",
  data() {
    return {
      equipments: store.getters.equipments,
      showForm: false,
      componentName: "FlexTable",
      itemId: 0,

      /* ---START---
      Data for Equipment-Table using FlexTable-Component*/
      tableTitle: "EQUIPMENT",
      columnTitles: [
        "ID",
        "BEZEICHNUNG",
        "HERSTELLER",
        "TYPE",
        "KATEGORIE",
        "LETZTE WARTUNG",
        "NÄCHSTE WARTUNG",
      ],
      filters: [
        {
          id: "filterId",
          name: "ID",
          type: "number",
          placeholder: "ID...",
          class: "filter-input",
          filter: "",
          col: 0,
          //Attribute size not working on type "number"
          //size wird über css gesteuert (input-filter[type])
        },
        {
          id: "filterEquipmentName",
          name: "BEZEICHNUNG",
          type: "text",
          placeholder: "Bezeichnung...",
          size: 15,
          filter: "",
          col: 1,
        },
        {
          id: "filterManufacturer",
          name: "HERSTELLER",
          type: "text",
          placeholder: "Hersteller...",
          size: 15,
          filter: "",
          col: 2,
        },
        {
          id: "filterType",
          name: "TYPE",
          type: "text",
          placeholder: "Type...",
          size: 5,
          filter: "",
          col: 3,
        },
        {
          id: "filterEquipmentCategory",
          name: "KATEGORIE",
          type: "text",
          placeholder: "Kategorie...",
          size: 15,
          filter: "",
          col: 4,
        },
        {
          id: "filterLastMaintenance",
          name: "LETZTE WARTUNG",
          type: "text",
          placeholder: "Letzte Wartung...",
          size: 15,
          filter: "",
          col: 5,
        },
        {
          id: "filterNextMaintenance",
          name: "NÄCHSTE WARTUNG",
          type: "text",
          placeholder: "Nächste Wartung...",
          size: 15,
          filter: "",
          col: 6,
        },
        {
          id: "",
          name: "",
          type: "",
          placeholder: "",
          size: 1,
          filter: "",
          col: 7,
          style: "display:none",
        },
        {
          id: "",
          name: "",
          type: "",
          placeholder: "",
          size: 1,
          filter: "",
          col: 8,
          style: "display:none",
        },
        {
          id: "",
          name: "",
          type: "",
          placeholder: "",
          size: 1,
          filter: "",
          col: 9,
          style: "display:none",
        },
        {
          id: "",
          name: "",
          type: "",
          placeholder: "",
          size: 1,
          filter: "",
          col: 10,
          style: "display:none",
        },
      ],
      /* ---END--- */

      fabFunctions: [
        {
          id: "mainfab",
          icon: "fa-solid fa-plus",
          activeIcon: "fa-solid fa-circle-plus",
          action: "changeComponent",
          componentName: "EquipmentNew",
          itemId: 0,
        },
        /* {
          id: "subfab1",
          colors: "sub-petrol",
          icon: "fa-regular fa-circle-pause",
          action: "edit",
          componentName: "EquipmentNew",
      },
      {
          id: "subfab2",
          colors: "sub-petrol",
          icon: "fa-solid fa-thumbtack",
          action: "edit",
          componentName: "EquipmentNew",
      },
      {
          id: "subfab3",
          colors: "sub-lightgrey",
          icon: "fa-regular fa-calendar",
          action: "edit",
          componentName: "EquipmentNew",
      },
      {
          id: "subfab4",
          colors: "sub-petrol",
          icon: "fa-regular fa-heart",
          action: "edit",
          componentName: "EquipmentNew",
      },
      {
          id: "subfab5",
          colors: "sub-yellow",
          icon: "fa-solid fa-heart-pulse",
          action: "edit",
          componentName: "EquipmentNew",
      }, */
      ],
    };
  },

  components: {
    EquipmentNew,
    FlexTable,
    EquipmentDetail,
    EquipmentReview,
    FloatingActionButton,
  },

  computed: {
    setTableData() {
      /*data has to be set up in same order as columnTitles
      because of differently named data keys in different stored data. 
      the child uses the index of the array to show data in table!
      */
      let data = [];
      for (let i = 0; i < this.equipments.length; i++) {
        let item = [
          /* DATA COLUMNS */
          {
            data: this.equipments[i].equipmentId,
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            data: this.equipments[i].equipmentName,
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            data: this.equipments[i].manufacturer,
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            data: this.equipments[i].type,
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            data: this.equipments[i].equipmentCategory,
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            data: this.equipments[i].purchaseDate,
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            data: this.equipments[i].serviceLife,
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          /* ICONS */
          {
            class: "fa-solid fa-circle-info table-icon",
            title: "Details",
            type: "button",
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            class: "fa-solid fa-pencil table-icon",
            title: "bearbeiten",
            type: "button",
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            class: "fa-solid fa-arrow-right-from-bracket table-icon",
            title: "ausscheiden",
            type: "button",
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
          {
            class: "fa-solid fa-trash-can table-icon",
            title: "ausscheiden",
            type: "button",
            action: "changeComponent",
            componentName: "EquipmentDetail",
          },
        ];
        data.push(item);
      }
      return data;
    },
  },

  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
      this.itemId = payload.id;
    },
    fabListener(payload) {
      switch (payload.action) {
        case "changeComponent":
          this.componentName = payload.componentName;
          break;
      }
    },
  },

  created() {},
};
</script>

<style scoped></style>
