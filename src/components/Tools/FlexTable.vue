<template>
  <div>
    <!-- USED DATA FROM PARENT (PROP): TABLE-TITLE -->
    <h1>{{ title }}</h1>
    <table id="dataTable" class="table table-hover table-bordered">
      <thead>
        <!--USED DATA FROM PARENT (PROP): COLUMN TITLES  -->
        <tr id="header">
          <th v-if="!isSorted[0]" class="th-ffp" @click="sortTable(0)" id="0">
            {{ this.columnTitles[0] }}
          </th>
          <th
            v-if="isSorted[0] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(0)"
            id="0"
          >
            {{ this.columnTitles[0] }} &#x2BC5;
          </th>
          <th
            v-if="isSorted[0] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(0)"
            id="0"
          >
            {{ this.columnTitles[0] }} &#x2BC6;
          </th>
          <th v-if="!isSorted[1]" class="th-ffp" @click="sortTable(1)" id="0">
            {{ this.columnTitles[1] }}
          </th>
          <th
            v-if="isSorted[1] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(1)"
            id="0"
          >
            {{ this.columnTitles[1] }} &#x2BC5;
          </th>
          <th
            v-if="isSorted[1] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(1)"
            id="0"
          >
            {{ this.columnTitles[1] }} &#x2BC6;
          </th>
          <th v-if="!isSorted[2]" class="th-ffp" @click="sortTable(2)" id="0">
            {{ this.columnTitles[2] }}
          </th>
          <th
            v-if="isSorted[2] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(2)"
            id="0"
          >
            {{ this.columnTitles[2] }} &#x2BC5;
          </th>
          <th
            v-if="isSorted[2] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(2)"
            id="0"
          >
            {{ this.columnTitles[2] }} &#x2BC6;
          </th>
          <th v-if="!isSorted[3]" class="th-ffp" @click="sortTable(3)" id="0">
            {{ this.columnTitles[3] }}
          </th>
          <th
            v-if="isSorted[3] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(3)"
            id="0"
          >
            {{ this.columnTitles[3] }} &#x2BC5;
          </th>
          <th
            v-if="isSorted[3] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(3)"
            id="0"
          >
            {{ this.columnTitles[3] }} &#x2BC6;
          </th>
          <th v-if="!isSorted[4]" class="th-ffp" @click="sortTable(4)" id="0">
            {{ this.columnTitles[4] }}
          </th>
          <th
            v-if="isSorted[4] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(4)"
            id="0"
          >
            {{ this.columnTitles[4] }} &#x2BC5;
          </th>
          <th
            v-if="isSorted[4] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(4)"
            id="0"
          >
            {{ this.columnTitles[4] }} &#x2BC6;
          </th>
          <th v-if="!isSorted[5]" class="th-ffp" @click="sortTable(5)" id="0">
            {{ this.columnTitles[5] }}
          </th>
          <th
            v-if="isSorted[5] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(5)"
            id="0"
          >
            {{ this.columnTitles[5] }} &#x2BC5;
          </th>
          <th
            v-if="isSorted[5] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(5)"
            id="0"
          >
            {{ this.columnTitles[5] }} &#x2BC6;
          </th>
          <th v-if="!isSorted[6]" class="th-ffp" @click="sortTable(6)" id="0">
            {{ this.columnTitles[6] }}
          </th>
          <th
            v-if="isSorted[6] && this.dir === 'asc'"
            class="th-ffp"
            @click="sortTable(6)"
            id="0"
          >
            {{ this.columnTitles[6] }} &#x2BC5;
          </th>
          <th
            v-if="isSorted[6] && this.dir === 'desc'"
            class="th-ffp"
            @click="sortTable(6)"
            id="0"
          >
            {{ this.columnTitles[6] }} &#x2BC6;
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
        <!-- USED DATA FROM PARENT (PROP): FILTERS -->
        <transition name="fade" mode="out-in">
          <tr v-show="this.showFilterBar">
            <th v-for="filter in filters" :key="filter.id" class="th-ffp">
              <input v-bind="filter" @keyup="filterTable" />
            </th>
          </tr>
        </transition>
      </thead>
      <!-- USED DATA FROM PARENT (PROP): DATA-ARRAY (SET-TABLE-DATA)-->
      <tbody>
        <tr v-for="item in tableData" :key="item[0].data">
          <td
            @click="
              tableActions(item[0].action, item[0].componentName, item[0].data)
            "
          >
            {{ item[0].data }}
          </td>
          <td
            @click="
              tableActions(item[1].action, item[1].componentName, item[0].data)
            "
          >
            {{ item[1].data }}
          </td>
          <td
            @click="
              tableActions(item[2].action, item[2].componentName, item[0].data)
            "
          >
            {{ item[2].data }}
          </td>
          <td
            @click="
              tableActions(item[3].action, item[3].componentName, item[0].data)
            "
          >
            {{ item[3].data }}
          </td>
          <td
            @click="
              tableActions(item[4].action, item[4].componentName, item[0].data)
            "
          >
            {{ item[4].data }}
          </td>
          <td
            @click="
              tableActions(item[5].action, item[5].componentName, item[0].data)
            "
          >
            {{ item[5].data }}
          </td>
          <td
            @click="
              tableActions(item[6].action, item[6].componentName, item[0].data)
            "
          >
            {{ item[6].data }}
          </td>
          <td
            class="text-center"
            @click="
              tableActions(item[7].action, item[7].componentName, item[0].data)
            "
          >
            <i
              :class="item[7].class"
              :title="item[7].title"
              :type="item[7].type"
            ></i>
          </td>
          <td
            class="text-center"
            @click="
              tableActions(item[8].action, item[8].componentName, item[0].data)
            "
          >
            <i
              :class="item[8].class"
              :title="item[8].title"
              :type="item[8].type"
            ></i>
          </td>
          <td
            class="text-center"
            @click="
              tableActions(item[9].action, item[9].componentName, item[0].data)
            "
          >
            <i
              :class="item[9].class"
              :title="item[9].title"
              :type="item[9].type"
            ></i>
          </td>
          <td
            class="text-center"
            @click="
              tableActions(
                item[10].action,
                item[10].componentName,
                item[0].data
              )
            "
          >
            <i
              :class="item[10].class"
              :title="item[10].title"
              :type="item[10].type"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "@store/index.js";

export default {
  name: "FlexTable",
  components: {},

  data() {
    /* DATA __REQUIRED__ FOR FLEX-TABLE:
      + Page-Title (optional)
      + Column-Titles (required! to be flexible in Column-Names)
      + Column-Data (required! computed property in parent)
      + DefaultFilters (required! to define FilterBar)
    */
    return {
      isSorted: [false, false, false, false, false, false, false],
      dir: "",
      showFilterBar: false,

      /*
      "filters" is an array, used to locally save changes in filter-inputs.
      those changes cannot be stored in a prop, so they are stored in this variable, see onMounted-Function: on mount, the data is transferred!
      vue does not allow to change data in childs. in this case this never will cause any problems because "filters" are always resetted to "default" when reloading the component. though, the data is only changed temporarily and should never be saved to the store. this is why i decided to do it this way!
      */
      filters: [],
      filtersActive: false,
    };
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    columnTitles: {
      type: Array,
      required: true,
    },
    /*defaultFilters:
    filters are sent as prop by parent;
    default-value is "" (empty, which means "no filter")
    */
    defaultFilters: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
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
    tableActions(action, componentName, id) {
      let payload = {
        action: action,
        componentName: componentName,
        id: id,
      };
      switch (action) {
        case "showDetail":
          this.$emit("userInput", payload);
          break;
      }
    },

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
  created() {},

  mounted() {
    this.sortTable(0);
    this.sortTable(0);
    for (let i = 0; i < this.defaultFilters.length; i++) {
      this.filters[i] = this.defaultFilters[i];
    }
  },

  unmounted() {},

  updated() {},
};
</script>

<style scoped></style>
