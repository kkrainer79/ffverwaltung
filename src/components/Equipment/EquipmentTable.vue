<template>
  <div>
    <h1>EQUIPMENT-ÜBERSICHT</h1>
    <table id="dataTable" class="table table-hover table-bordered">
      <thead>
        <!-- HEADER -->
        <tr id="header">
          <th v-if="!isSorted[0]" class="th-ffp" @click="sortTable(0)" id="0">
            ID
          </th>
          <th
            v-if="isSorted[0] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(0)"
            id="0"
          >
            ID &#x2BC5;
          </th>
          <th
            v-if="isSorted[0] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(0)"
            id="0"
          >
            ID &#x2BC6;
          </th>
          <th v-if="!isSorted[1]" class="th-ffp" @click="sortTable(1)" id="0">
            BEZEICHNUNG
          </th>
          <th
            v-if="isSorted[1] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(1)"
            id="0"
          >
            BEZEICHNUNG &#x2BC5;
          </th>
          <th
            v-if="isSorted[1] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(1)"
            id="0"
          >
            BEZEICHNUNG &#x2BC6;
          </th>
          <th v-if="!isSorted[2]" class="th-ffp" @click="sortTable(2)" id="0">
            HERSTELLER
          </th>
          <th
            v-if="isSorted[2] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(2)"
            id="0"
          >
            HERSTELLER &#x2BC5;
          </th>
          <th
            v-if="isSorted[2] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(2)"
            id="0"
          >
            HERSTELLER &#x2BC6;
          </th>
          <th v-if="!isSorted[3]" class="th-ffp" @click="sortTable(3)" id="0">
            TYPE
          </th>
          <th
            v-if="isSorted[3] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(3)"
            id="0"
          >
            TYPE &#x2BC5;
          </th>
          <th
            v-if="isSorted[3] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(3)"
            id="0"
          >
            TYPE &#x2BC6;
          </th>
          <th v-if="!isSorted[4]" class="th-ffp" @click="sortTable(4)" id="0">
            KATEGORIE
          </th>
          <th
            v-if="isSorted[4] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(4)"
            id="0"
          >
            KATEGORIE &#x2BC5;
          </th>
          <th
            v-if="isSorted[4] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(4)"
            id="0"
          >
            KATEGORIE &#x2BC6;
          </th>
          <th v-if="!isSorted[5]" class="th-ffp" @click="sortTable(5)" id="0">
            LETZTE WARTUNG
          </th>
          <th
            v-if="isSorted[5] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(5)"
            id="0"
          >
            LETZTE WARTUNG &#x2BC5;
          </th>
          <th
            v-if="isSorted[5] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(5)"
            id="0"
          >
            LETZTE WARTUNG &#x2BC6;
          </th>
          <th v-if="!isSorted[6]" class="th-ffp" @click="sortTable(6)" id="0">
            NÄCHSTE WARTUNG
          </th>
          <th
            v-if="isSorted[6] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(6)"
            id="0"
          >
            NÄCHSTE WARTUNG &#x2BC5;
          </th>
          <th
            v-if="isSorted[6] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(6)"
            id="0"
          >
            NÄCHSTE WARTUNG &#x2BC6;
          </th>
          <th class="th-ffp"></th>
          <th class="th-ffp"></th>
          <th class="th-icon">
            <i
              v-show="this.filtersActive"
              class="th-icon-active fa-solid fa-ban"
              title="Alle Filter löschen"
              @click="clearFilter"
            ></i>
          </th>
          <th
            class="th-icon"
            title="Filterleiste einblenden"
            @click="showFilter"
          >
            <i class="fa-solid fa-filter" :class="filterIsActive"></i>
          </th>
        </tr>

        <!-- FILTER -->
        <transition name="fade" mode="out-in">
          <tr v-show="this.showFilterBar">
            <th v-for="filter in this.filters" :key="filter.id" class="th-ffp">
              <input v-bind="filter" @keyup="filterTable" />
            </th>
          </tr>
        </transition>
        <!-- Filter werden mit function showFilter erzeugt -->
        <!-- END FILTER -->
      </thead>
      <tbody>
        <tr
          v-for="equipment in equipments"
          :key="equipment.equipmentId"
          @change-component="changeComponent(componentName)"
        >
          <td
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            {{ equipment.equipmentId }}
          </td>
          <td
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            {{ equipment.equipmentName }}
          </td>
          <td
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            {{ equipment.manufacturer }}
          </td>
          <td
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            {{ equipment.type }}
          </td>
          <td
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            {{ equipment.equipmentCategory }}
          </td>
          <td
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            {{ equipment.equipmentCategory }}
          </td>
          <td
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            {{ equipment.equipmentImage }}
          </td>
          <td
            class="text-center"
            @click="changeComponent('EquipmentDetail', equipment.equipmentId)"
          >
            <i
              class="fa-solid fa-circle-info"
              title="Details"
              type="button"
            ></i>
          </td>
          <td
            class="text-center"
            @click="doSomething('EquipmentDetail', equipment.equipmentId)"
          >
            <i class="fa-solid fa-pencil" title="bearbeiten" type="button"></i>
          </td>
          <td
            class="text-center"
            @click="doSomething('EquipmentDetail', equipment.equipmentId)"
          >
            <i
              class="fa-solid fa-arrow-right-from-bracket"
              title="ausscheiden"
              type="button"
            ></i>
          </td>
          <td
            class="text-center"
            @click="doSomething('EquipmentDetail', equipment.equipmentId)"
          >
            <i
              class="fa-regular fa-trash-can"
              title="löschen"
              type="button"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <FloatingActionButton
      :fabMenus="fabFunctions"
      @emitUserInput="fabListener"
    ></FloatingActionButton>
    <div class="col-2">
      <div class="d-grid"></div>
      <!-- <div class="d-grid mt-2">
          <button class="btn btn-ffp" @click="changeComponent('EquipmentNew')">
            Neu
          </button>
        </div> -->
    </div>
  </div>
</template>

<script>
import store from "@store/index.js";
import FloatingActionButton from "@components/Tools/FloatingActionButton.vue";

export default {
  name: "EquipmentTable",
  components: {
    FloatingActionButton,
  },

  data() {
    return {
      equipments: store.getters.equipments,
      isSorted: [false, false, false, false, false, false, false],
      dir: "",
      showFilterBar: false,
      filtersActive: false,
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

  computed: {
    filterIsActive() {
      if (this.filtersActive) {
        return "th-icon-active";
      } else return "";
    },
    newId() {
      return store.getters.newId;
    },
  },

  methods: {
    showFilter() {
      this.showFilterBar = !this.showFilterBar;
    },

    clearFilter() {
      for (let i = 0; i < this.filters.length; i++) {
        this.filters[i].filter = "";
        this.filtersActive = false;
        // eslint-disable-next-line no-unused-vars
      }
      let activeInputIds = [];
      for (let i = 0; i < this.filters.length; i++) {
        if (this.filters[i].id !== "") activeInputIds.push(this.filters[i].id);
      }

      for (let i = 0; i < activeInputIds.length; i++) {
        let input = document.getElementById(activeInputIds[i]);
        input.value = "";
      }
      for (let i = 0; i < this.filters.length; i++) {
        this.filters[i].filter = "";
      }

      let table = document.getElementById("dataTable");
      let tr = table.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
      }
    },

    showDetail(id, name) {
      this.$emit("change-component", "EquipmentDetail");
      console.log("do something with " + id + ". FunctionName: " + name);
    },

    changeComponent(componentName, id) {
      this.$emit("change-component", { componentName, id });
    },

    fabListener(payload) {
      switch (payload.action) {
        case "changeComponent":
          this.$emit(payload.action, { componentName: payload.componentName });
          break;
      }
    },

    filterTable(event) {
      //TUTORIAL: https://www.w3schools.com/howto/howto_js_filter_table.asp
      let table = document.getElementById("dataTable");
      let tr = table.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
      }

      //Spalte des aktuellen Events ermitteln:
      //also: WO gesucht wird
      let id = event.target.id;
      let col = event.target.attributes.col.nodeValue;

      //eingegebenen Filter des aktuellen Events ermitteln:
      //also: WAS gesucht wird
      const input = document.getElementById(id);
      let filter = input.value.toUpperCase();

      this.filters[col].filter = filter;

      //Ermitteln, welche Filter aktuell gesetzt sind
      let activeFilters = [];
      for (let i = 0; i < this.filters.length; i++) {
        activeFilters.push({
          col: this.filters[i].col,
          filter: this.filters[i].filter,
        });
      }

      //activeFilters an Template übergeben (Auslösen der gebundenen Klasse)
      this.filtersActive = false;
      for (let i = 0; i < activeFilters.length; i++) {
        if (activeFilters[i].filter !== "") {
          this.filtersActive = true;
        }
      }

      //Ermitteln, auf welche TableRows die Filter zutreffen;
      //die anderen werden mittels "style='display: none'" ausgeblendet
      //äußere Schleife: Alle TableRows durchlaufen
      //innere Schleife: Alle gesetzten Filter (nach Spalten) durchlaufen

      for (let i = 0; i < tr.length; i++) {
        for (let j = 0; j < activeFilters.length; j++) {
          let td = tr[i].getElementsByTagName("td")[activeFilters[j].col];
          if (td && tr[i].style.display !== "none") {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(activeFilters[j].filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
    },

    sortTable(col) {
      //TUTORIAL: https://www.w3schools.com/howto/howto_js_sort_table.asp
      for (let i = 0; i < this.isSorted.length; i++) {
        this.isSorted[i] = false;
      }
      this.isSorted[col] = true;
      let table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        switchcount = 0;
      table = document.getElementById("dataTable");
      switching = true;
      // Set the sorting direction to ascending:
      this.dir = "asc";
      /* Make a loop that will continue until
  no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
    first two, which contain table headers and filters):
    so: start @index[2] (cancel Index[0] and index[1])*/
        for (i = 2; i < rows.length - 1; i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
      one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[col];
          y = rows[i + 1].getElementsByTagName("TD")[col];
          /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
          if (this.dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (this.dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount++;
        } else {
          /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && this.dir == "asc") {
            this.dir = "desc";
            switching = true;
          }
        }
      }
    },
  },
  created() {

  },

  mounted() {
    this.sortTable(0);
    this.sortTable(0);
  },

  unmounted() {},

  updated() {
  },
};
</script>

<style scoped></style>
