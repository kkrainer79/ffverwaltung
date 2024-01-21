<template>
  <div class="container-flex">
    <the-nav-bar @changeComponent="changeComponent"></the-nav-bar>
    <div class="container">
      <transition
        name="fade"
        mode="out-in"
        appear
        @user-input="userInputHandler"
      >
        <component
          :is="componentName"
          :itemId="this.itemId"
          :title="this.tableTitle"
          :columnTitles="this.columnTitles"
          :defaultFilters="this.filters"
          :tableData="this.setTableData"
          :colors="this.colors"
          :showMapLegend="this.showDiscarded"
        ></component>
      </transition>
      <UserNotification
        :show="this.showNotification"
        :notificationObj="this.notificationObj"
        @user-input="userInputHandler"
      ></UserNotification>
      <FloatingActionButton
        v-if="fabActive"
        :fabMenus="fabFunctions"
        @emitUserInput="userInputHandler"
      ></FloatingActionButton>
    </div>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import UserNotification from "@/components/Tools/UserNotification.vue";
import EquipmentNew from "@components/Equipment/EquipmentNew.vue";
import FlexTable from "@components/Tools/FlexTable.vue";
import EquipmentDetail from "@components/Equipment/EquipmentDetail.vue";
import EquipmentReview from "@components/Equipment/EquipmentReview.vue";
import FloatingActionButton from "@components/Tools/FloatingActionButton.vue";
import store from "@store/index.js";

export default {
  name: "EquipmentPage",
  components: {
    EquipmentNew,
    FlexTable,
    EquipmentDetail,
    EquipmentReview,
    FloatingActionButton,
    TheNavBar,
    UserNotification,
  },
  data() {
    return {
      equipments: store.getters.equipments,
      showForm: false,
      componentName: "FlexTable",
      itemId: 0,
      action: "",
      showNotification: false,
      showDiscarded: false,
      notificationObj: {
        type: "success",
        title: "test",
        message: "test",
        subMessage: "test",
        action: "close",
        icon: "",
        iconAsButton: false,
        button: false,
        timeOut: false,
        componentName: "EquipmentPage",
      },
      colors: [
        {
          name: "ausgeschieden",
          style:
            "color: var(--lightorange); background-color: var(--lightorange)",
        },
      ],

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

      /*FAB-FUNCTIONS ON FLEX-TABLE-PAGE
      CONTROLLED FROM EQUIPMENT-PAGE*/
      fabFunctions: [
        {
          id: "mainfab",
          icon: "fa-solid fa-plus",
          activeIcon: "fa-solid fa-circle-plus",
          action: "changeComponent",
          componentName: "EquipmentNew",
          title: "neu",
          itemId: 0,
          toggleDiscarded: false,
        },
        {
          id: "subfab1",
          colors: "sub-petrol",
          icon: "fa-solid fa-recycle",
          action: "toggleDiscarded",
          title: "ausgeschiedene anzeigen/ausblenden",
          componentName: "EquipmentNew",
        },
        /*{
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

  computed: {
    setTableData() {
      /*data has to be set up in same order as columnTitles
      because of differently named data keys in different stored data. 
      flexTable-Component uses the index of the array to show data in table!
      */
      let data = [];
      for (let i = 0; i < this.equipments.length; i++) {
        let discardedStyle = "";
        if (this.equipments[i].discarded) {
          discardedStyle = "color: var(--lightorange)";
        }

        let item = [
          /* DATA COLUMNS */
          {
            data: this.equipments[i].id,
            action: "showDetail",
            componentName: "EquipmentDetail",
            style: discardedStyle,
          },
          {
            data: this.equipments[i].equipmentName,
            action: "showDetail",
            componentName: "EquipmentDetail",
            style: discardedStyle,
          },
          {
            data: this.equipments[i].manufacturer,
            action: "showDetail",
            componentName: "EquipmentDetail",
            style: discardedStyle,
          },
          {
            data: this.equipments[i].type,
            action: "showDetail",
            componentName: "EquipmentDetail",
            style: discardedStyle,
          },
          {
            data: this.equipments[i].equipmentCategory,
            action: "showDetail",
            componentName: "EquipmentDetail",
            style: discardedStyle,
          },
          {
            data: this.equipments[i].latestReviewString,
            action: "showDetail",
            componentName: "EquipmentDetail",
            style: discardedStyle,
          },
          {
            data: this.equipments[i].nextReviewString,
            action: "showDetail",
            componentName: "EquipmentDetail",
            style: discardedStyle,
          },
          /* ICONS */
          {
            class: "fa-solid fa-pencil table-icon",
            title: "Details bearbeiten",
            type: "button",
            action: "edit",
            componentName: "EquipmentEdit",
            style: discardedStyle,
          },
          {
            class: "fa-solid fa-wrench table-icon",
            title: "Wartung erfassen",
            type: "button",
            action: "newReview",
            componentName: "EquipmentReview",
            style: discardedStyle,
          },
          {
            class: "fa-solid fa-arrow-right-from-bracket table-icon",
            title: "ausscheiden",
            type: "button",
            action: "discard",
            componentName: "",
            style: discardedStyle,
          },
          {
            class: "fa-solid fa-trash-can table-icon",
            title: "löschen",
            type: "button",
            action: "delete",
            componentName: "",
            style: discardedStyle,
          },
        ];
        if (!this.showDiscarded && !this.equipments[i].discarded) {
          data.push(item);
        } else if (this.showDiscarded) {
          data.push(item);
        }
      }
      return data;
    },
    fabActive() {
      if (this.componentName === "FlexTable") {
        return true;
      } else return false;
    },
  },

  methods: {
    userInputHandler(payload) {
      this.itemId = payload.id;
      switch (payload.action) {
        case "changeComponent":
          this.$router.push({ name: payload.componentName });
          break;
        case "new":
          this.$router.push({ name: payload.componentName });
          break;
        case "edit":
          this.$router.push({
            name: payload.componentName,
            params: { id: this.itemId },
            props: { id: this.itemId },
          });
          break;
        case "showDetail":
          this.$router.push({
            name: payload.componentName,
            params: { id: this.itemId },
            props: { id: this.itemId },
          });
          break;
        case "newReview":
          this.$router.push({
            name: payload.componentName,
            params: { id: this.itemId },
            props: { id: this.itemId },
          });
          break;
        case "toggleDiscarded":
          this.showDiscarded = !this.showDiscarded;
          break;
        case "discard":
          this.notificationObj = {
            type: "question",
            title: "Equipment ausscheiden?",
            message: "Wollen Sie dieses Equipment wirklich ausscheiden?",
            subMessage:
              "Es wird dabei nicht aus der Datenbank gelöscht, jedoch in der Equipment-Liste nicht mehr angezeigt.",
            iconAsButton: false,
            button: true,
            action: "close",
            icon: "",
            timeOut: false,
            componentName: "",
            target: "discard",
            id: this.itemId,
          };
          this.showNotification = true;
          break;
          case "delete":
          this.notificationObj = {
            type: "question",
            title: "Equipment löschen?",
            message: "Wollen Sie dieses Equipment wirklich löschen?",
            subMessage:
              "Es wird dabei unwiderbringlich aus der Datenbank gelöscht. Alle Daten gehen dabei verloren!",
            iconAsButton: false,
            button: true,
            action: "close",
            icon: "",
            timeOut: false,
            componentName: "",
            target: "delete",
            id: this.itemId,
          };
          this.showNotification = true;
          break;
        case "userNotification_yes":
          switch (payload.target) {
            case "discard":
              var data = {
                discarded: true,
              };
              var updateObj = {
                collection: "equipment",
                docId: payload.id,
                data: data,
              };
              this.$store
                .dispatch("updateDocument", updateObj)
                .then(() => {
                  this.$store.dispatch("getSingleDocument", updateObj);
                })
                .then(() => {})
                .catch((error) => {
                  console.log(error);
                });
                break;
                case "delete":
                var deleteObj = {
                  collection: "equipment",
                  docId: payload.id,
                }
                this.$store.dispatch("deleteDocument", deleteObj);
                break;
          }
          this.showNotification = false;
          break;
        case "userNotification_no":
          this.showNotification = false;
          break;
      }
    },
  },

  created() {},
  mounted() {},
  updated() {},
};
</script>

<style scoped></style>
