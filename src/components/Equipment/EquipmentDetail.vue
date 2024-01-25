<template>
  <div class="container-flex">
    <the-nav-bar @changeComponent="changeComponent"></the-nav-bar>
    <div class="container">
      <h1>EQUIPMENT-DETAILANSICHT</h1>
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
                      {{ maintenanceInterval }}
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
                      <a :href="this.getInvoice" target="_blank" rel="noopener noreferrer">Download</a>
                    </p>
                    <p v-else>Keine Daten vorhanden!</p>
                  </div>
                  <div class="col-6" v-if="item.documents !== ''">
                    <label class="detail-label">DOKUMENTE</label>
                    <p v-for="file in this.fileArray" :key="file.url">
                      <a :href="file.url" target="_blank" rel="noopener noreferrer"
                        >{{file.name}}</a
                      >
                    </p>
                  </div>
                  <div v-else>
                    <p>Keine Daten vorhanden!</p>
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
      <div class="row mt-2">
        <div class="col-2 mt-5">
          <div class="d-grid">
            <button
              class="btn btn-cancel"
              @click="
                fabListener({
                  action: 'changeComponent',
                  componentName: 'EquipmentPage',
                })
              "
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
  </div>
</template>

<script>
import store from "@/store/index.js";
import FloatingActionButton from "@components/Tools/FloatingActionButton.vue";
import TheNavBar from "../TheNavBar.vue";

export default {
  name: "EquipmentDetail",
  components: {
    FloatingActionButton,
    TheNavBar,
  },

  data() {
    return {
      itemId: 0,
      equipments: store.getters.equipments,
      imgagePath: "",
      invoicePath: "",
      documents: [],
      downloadURLs: store.getters.downloadURLs,
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
    item() {
      let item = {};
      for (let i = 0; i < this.equipments.length; i++) {
        if (this.equipments[i].id === this.itemId) {
          item = this.equipments[i];
        }
      }
      if (item !== "") {
        return item;
      } else {
        return "keine Ausrüstung mit dieser ID gefunden";
      }
    },

    getImg() {
      if (this.imagePath !== "") {
        return store.getters.imageUrl;
      } else {
        return this.placeholder;
      }
    },
    getInvoice() {
      if (this.invoicePath !== "") {
        let invoice = store.getters.invoiceUrl;
        return invoice;
      } else return "";
    },
    fileArray () {
      let fileArray = [];
      for (let i = 0; i < this.downloadURLs.length; i++) {
        let firstChar = this.documents[i].name.charAt(0).toUpperCase();
        let otherChars = this.documents[i].name.toLowerCase();
        let name = `${firstChar}${otherChars.slice(1)}`;
        let item = {
          name: name,
          url: this.downloadURLs[i]
        };
        fileArray.push(item);
      }
      return fileArray;
    },

    maintenanceInterval() {
      switch (this.item.maintenanceInterval) {
        case "2628000000":
          return "monatlich";
        case "7884000000":
          return "vierteljährlich";
        case "15768000000":
          return "halbjährlich";
        case "31536000000":
          return "jährlich";
        case 0:
          return "nach Bedarf";
      }
      return "unbekannt";
    },
  },

  methods: {
    fabListener(payload) {
      switch (payload.action) {
        case "changeComponent":
          this.$router.push({ name: payload.componentName });
          break;
        case "captureReview":
          this.$router.push({
            name: payload.componentName,
            params: { id: this.itemId },
            props: { id: this.itemId },
          });
          break;
      }
    },
  },

  mounted() {
    this.itemId = Number(this.$route.params.id);
    for (let i = 0; i < this.equipments.length; i++) {
      if (this.equipments[i].id === this.itemId) {
        this.imagePath = this.equipments[i].equipmentImage;
        this.invoicePath = this.equipments[i].invoice;
        this.documents = this.equipments[i].documents;
      }
    }

    if (this.invoicePath !== "") {
      let payload = {
        path: this.invoicePath,
        type: "invoice",
      };
      this.$store.dispatch("fileDownload", payload);
    }

    if (this.documents !== "") {
      for (let i = 0; i < this.documents.length; i++) {
        let payload = {
          path: this.documents[i].url,
          type: "documents",
        };
        this.$store.dispatch("fileDownload", payload);
      }
    }

    if (this.imagePath !== "") {
      let payload = {
        path: this.imagePath,
        type: "image",
      };
      this.$store.dispatch("fileDownload", payload);
    }
  },

  async created() {},

  unmounted() {
    this.img = "";
    this.$store.dispatch("updateImgUrl", "");
    this.$store.dispatch("resetFileUrl");
  },
};
</script>

<style scoped></style>
