<template>
  <div>
    <h4>EQUIPMENT-DETAILANSICHT</h4>
    <div class="card">
      <div class="card-header">
        <span>{{ item.label }}</span>
        <h1>{{ item.equipmentName }}</h1>
      </div>
      <div class="container">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="row">
                <label class="detail-label">HERSTELLER/TYPE</label>
                <div v-if="item.manufacturer !== ''" class="col-6">
                  {{ item.manufacturer }} {{ item.type }}
                </div>
                <div v-else class="col-6">Keine Daten vorhanden!</div>
                <div class="col-6"></div>
              </div>
              <div class="row mt-3">
                <div class="col-6">
                  <label class="detail-label">KATEGORIE</label>
                  <p v-if="item.equipmentCategory !== ''">
                    {{ item.equipmentCategory }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
                <div class="col-6">
                  <label class="detail-label">WARTUNGSINTERVALL</label>
                  <p v-if="item.maintenanceInterval !== ''">
                    {{ item.maintenanceInterval }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="detail-label">EINFÜHRUNGSDATUM</label>
                  <p v-if="item.purchaseDate !== ''">
                    {{ item.purchaseDate }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
                <div class="col-6">
                  <label class="detail-label">KAUFPREIS</label>
                  <p v-if="item.purchasePrice !== ''">
                    {{ item.purchasePrice }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="detail-label">HÄNDLER</label>
                  <p v-if="item.dealer !== ''">
                    {{ item.dealer }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
                <div class="col-6">
                  <label class="detail-label">HÄNDLERKONTAKT</label>
                  <p v-if="item.dealerName !== ''">
                    {{ item.dealerName }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="detail-label">RECHNUNG</label>
                  <p v-if="item.invoice !== ''">
                    {{ item.invoice }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
                <div class="col-6">
                  <label class="detail-label">BESCHREIBUNG</label>
                  <p v-if="item.manual !== ''">
                    {{ item.manual }}
                  </p>
                  <p v-else>Keine Daten vorhanden!</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <img :src="getImg" class="detail-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <EquipmentReview v-if="showReview"></EquipmentReview>
    <div class="row mt-2">
      <div class="col-2 mt-5">
        <div class="d-grid">
          <button
            class="btn btn-cancel"
            @click="fabListener({action: 'changeComponent', componentName: 'FlexTable'})"
          >
            Zurück
          </button>
        </div>
      </div>
    </div>
    <FloatingActionButton
      :fabMenus="fabFunctions"
      @emitUserInput="fabListener"
    ></FloatingActionButton>
  </div>
</template>

<script>
import store from "@/store/index.js";
import FloatingActionButton from "@components/Tools/FloatingActionButton.vue";
import EquipmentReview from "@components/Equipment/EquipmentReview.vue";

export default {
  name: "EquipmentDetail",
  components: {
    FloatingActionButton,
    EquipmentReview,
  },

  data() {
    return {
      equipments: store.getters.equipments,
      imgagePath: "",
      placeholder:
        "https://fakeimg.pl/600x400/1a1a1a/ebebeb?text=Kein+Bild+vorhanden",
      showReview: false,
      fabFunctions: [
        {
          id: "mainfab",
          icon: "fa-solid fa-screwdriver-wrench",
          activeIcon: "fa-solid fa-wrench",
          action: "captureReview",
          componentName: "EquipmentReview",
          itemId: this.itemId,
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

  props: {
    itemId: Number,
  },

  computed: {
    item() {
      let item = {};
      for (let i = 0; i < this.equipments.length; i++) {
        if (this.equipments[i].equipmentId === this.itemId) {
          item = this.equipments[i];
        }
      }
      /* console.log(item);
      for (let [key, value] of Object.entries(item)) {
        if (value === "") {
          item[key] = "Keine Daten vorhanden";
        }
      } */
      if (item !== "") {
        return item;
      } else {
        return "keine Ausrüstung mit dieser ID gefunden";
      }
    },

    getImg() {
      if (this.imagePath != "") {
        return store.getters.imgUrl;
      } else {
        return this.placeholder;
      }
    },
  },

  methods: {
    changeComponent(componentName) {
      this.$emit("changeComponent", { componentName });
    },
    fabListener(payload) {
      switch (payload.action) {
        case "changeComponent":
          this.$emit(payload.action, {componentName: payload.componentName});
          break;
        case "captureReview":
          this.$emit("changeComponent", {componentName: payload.componentName, id: Number(payload.id)});
          break;
      }
    },
  },

  created() {
    for (let i = 0; i < this.equipments.length; i++) {
      if (this.equipments[i].equipmentId === this.itemId) {
        this.imagePath = this.equipments[i].equipmentImage;
      }
    }
    if (this.imagePath != "") {
      this.$store.dispatch("fileDownload", this.imagePath);
    }
  },

  unmounted() {
    this.img = "";
    this.$store.dispatch("updateImgUrl", "");
  },
};
</script>

<style scoped></style>
