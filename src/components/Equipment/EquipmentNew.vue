<template>
  <div class="container">
    <h1>{{ this.pageTitle }}</h1>
    <Form
      id="newEquipmentForm"
      class="text-start mt-5"
      @submit="submitData"
      :validation-schema="schema"
      v-slot="{ errors }"
      :key="this.newEquipment.equipmentCategory"
    >
      <!-- :key="this.equipmentCategory" -->
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="equipmentName">Bezeichnung*</label>
          <Field
            as="input"
            name="equipmentName"
            type="text"
            class="form-control"
            id="equipmentName"
            :value="this.newEquipment.equipmentName"
            @change="saveInputData"
          />
          <small class="text-danger" v-if="errors.equipmentName">{{
            errors.equipmentName
          }}</small>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="manufacturer">Hersteller/Marke*</label>
          <Field
            as="input"
            name="manufacturer"
            type="text"
            class="form-control"
            id="manufacturer"
            :value="this.newEquipment.manufacturer"
            @change="saveInputData"
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="type">Typenbezeichnung</label>
          <Field
            as="input"
            name="type"
            type="text"
            class="form-control"
            id="type"
            :value="this.newEquipment.type"
            @change="saveInputData"
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="equipmentCategory">Kategorie*</label>
          <Field
            as="select"
            name="equipmentCategory"
            class="form-control"
            id="equipmentCategory"
            :value="this.newEquipment.equipmentCategory"
            @change="getCategory"
          >
            <option value="" disabled>Bitte wählen</option>
            <option value="RFA" name="RFA">RFA</option>
            <option value="TLF" name="TLF">TLF</option>
            <option value="MTF" name="MTF">MTF</option>
            <option value="DRO" name="Drohne">Drohne</option>
            <option value="WSD" name="Wasserdienst">Wasserdienst</option>
            <option value="FWH" name="Feuerwehrhaus">Feuerwehrhaus</option>
            <option value="SON" name="Sonstige">Sonstige</option>
          </Field>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="dealer">Händler</label>
          <Field
            as="input"
            name="dealer"
            type="text"
            class="form-control"
            id="dealer"
            placeholder="Firma"
            :value="this.newEquipment.dealer"
            @change="saveInputData"
          />
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="dealerName">Händler-Kontakt</label>
          <Field
            as="input"
            name="dealerName"
            type="text"
            class="form-control"
            id="dealerName"
            placeholder="Name, Telefon etc."
            :value="this.newEquipment.dealerName"
            @change="saveInputData"
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-lg-2 col-md-3">
          <label for="purchaseDate">Einführungsdatum*</label>
          <Field
            as="input"
            name="purchaseDate"
            type="date"
            class="form-control"
            id="purchaseDate"
            :value="this.newEquipment.purchaseDate"
            @change="saveInputData"
          />
          <small class="text-danger" v-if="errors.purchaseDate">{{
            errors.purchaseDate
          }}</small>
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="purchasePrice">Preis</label>
          <Field
            as="input"
            name="purchasePrice"
            type="number"
            class="form-control"
            id="purchasePrice"
            :value="this.newEquipment.purchasePrice"
            @change="saveInputData"
          />
          <small class="text-danger" v-if="errors.purchasePrice">{{
            errors.purchasePrice
          }}</small>
        </div>

        <div class="col-lg-1 col-md-2">
          <label for="serviceLife">Lebensdauer</label>
          <Field
            as="input"
            name="serviceLife"
            type="number"
            class="form-control"
            id="serviceLife"
            placeholder="Jahre"
            :value="this.newEquipment.serviceLife"
            @change="saveInputData"
          />
          <small class="text-danger" v-if="errors.serviceLife">{{
            errors.serviceLife
          }}</small>
        </div>
        <div class="col-lg-2 col-md-5">
          <label for="mainentanceInterval">Wartungsintervall</label>
          <Field
            as="select"
            name="maintenanceInterval"
            class="form-control"
            id="maintenanceInterval"
            :value="this.newEquipment.maintenanceInterval"
            @change="saveInputData"
          >
            <!-- option values in milliseconds! -->
            <option value="0" selected>bei Bedarf</option>
            <option value="2628000000">monatlich</option>
            <option value="7884000000">vierteljährlich</option>
            <option value="15768000000">halbjährlich</option>
            <option value="31536000000">jährlich</option>
          </Field>
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="invoiceFile">Rechnung</label>
          <Field
            as="input"
            name="invoiceFile"
            type="file"
            class="form-control"
            id="invoiceFile"
            accept=".pdf, .doc"
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="manualFile">Bedienungsanleitung</label>
          <Field
            as="input"
            name="manualFile"
            type="file"
            class="form-control"
            id="manualFile"
            accept=".pdf, .doc"
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="equipmentImageFile">Bild</label>
          <Field
            as="input"
            name="equipmentImageFile"
            type="file"
            class="form-control"
            id="equipmentImageFile"
            accept="image/*"
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
        <div class="col-lg-2 col-sm-4 col-xs-8">
          <label for="equipmentLabel">Label</label>
          <Field
            as="input"
            name="label"
            type="text"
            class="form-control"
            id="label"
            :value="this.label"
            readonly
          >
          </Field>
        </div>
        <div class="col-lg-1 col-sm-2 col-xs-4">
          <label for="equipmentId">ID</label>
          <Field
            as="input"
            name="equipmentId"
            type="text"
            class="form-control"
            id="equipmentId"
            :value="this.id"
            readonly
          >
          </Field>
        </div>
      </div>
      <div class="row mt-5">
        <div class="form-group col-lg-2">
          <div class="d-grid">
            <button
              type="button"
              v-if="!message"
              class="btn btn-cancel"
              @click="cancelNewEquipment"
            >
              Abbrechen
            </button>
          </div>
        </div>
        <div class="form-group col-lg-2 offset-2">
          <div class="d-grid">
            <button class="btn btn-ffp" v-if="!message">
              <span>Speichern</span>
            </button>
          </div>
          <div class="col-10 offset-1 text-danger text-center mt-2">
            <!-- <small v-if="error">{{ errorText }}</small> -->
          </div>
        </div>
      </div>
    </Form>
    <UserNotification></UserNotification>
  </div>
</template>

<script>
import UserNotification from "../Tools/UserNotification.vue";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import store from "@store/index.js";
import { EventBus } from "@/event-bus";

export default {
  name: "EquipmentNew",
  data() {
    const schema = yup.object().shape({
      equipmentName: yup.string().required("Das ist ein Pflichtfeld!").trim(),
      manufacturer: yup.string().required("Das ist ein Pflichtfeld!").trim(),
      type: yup.string().trim(),
      equipmentCategory: yup.string().required("Das ist ein Pflichtfeld!"),
      purchaseDate: yup
        .date("Bitte korrektes Datum eingeben!")
        .required("Das ist ein Pflichtfeld!"),
      purchasePrice: yup.number("Muss eine Zahl sein!"),
      serviceLife: yup.number("Muss eine Zahl sein!"),
    });

    return {
      id: store.getters.newId,
      itemId: 0,
      equipments: store.getters.equipments,
      equipmentCategory: "XXX",
      ifCancelledData: {},
      schema,
      isLoading: false,
      fileType: "",
      message: false,
      purchaseDate: "",
      maintenanceInterval: "",
      newEquipment: {
        maintenanceInterval: 0,
      },
      mode: "new",
    };
  },

  components: {
    Form,
    Field,
    UserNotification,
  },

  computed: {
    label() {
      let label = `${this.equipmentCategory}-${this.id}`;
      return label;
    },
    item() {
      let item;
      for (let i = 0; i < this.equipments.length; i++) {
        if (this.equipments[i].id === this.itemId) {
          item = this.equipments[i];
        }
      }
      return item;
    },
    pageTitle() {
      if (this.mode === "new") {
        return "EQUIPMENT ANLEGEN";
      } else return "EQUIPMENT BEARBEITEN";
    },
  },

  methods: {
    saveInputData(event) {
      this.newEquipment[event.target.id] = event.target._value;
    },

    getCategory(event) {
      this.equipmentCategory = event.target._value;
      this.saveInputData(event);
    },

    async submitData(values) {
      this.isLoading = true;
      this.purchaseDate = values.purchaseDate;
      this.maintenanceInterval = values.maintenanceInterval;
      let imagePath = "";
      let invoicePath = "";
      let manualPath = "";

      //set data for image
      if (values.equipmentImageFile) {
        this.fileType = "image";
        imagePath = this.getPath(
          values.equipmentImageFile,
          this.fileType,
          values.equipmentId
        );
        const imgObject = {
          path: imagePath,
          file: values.equipmentImageFile,
        };
        this.$store.dispatch("compressImage", imgObject);
      }
      //set data for invoice
      if (values.invoiceFile) {
        this.fileType = "invoice";
        invoicePath = this.getPath(
          values.invoiceFile,
          this.fileType,
          values.equipmentId
        );
        const invoiceObj = {
          path: invoicePath,
          file: values.invoiceFile,
        };
        this.$store.dispatch("fileUpload", invoiceObj);
      }
      //set data for manual
      if (values.manualFile) {
        this.fileType = "manual";
        manualPath = this.getPath(
          values.manualFile,
          this.fileType,
          values.equipmentId
        );
        const manualObj = {
          path: manualPath,
          file: values.manualFile,
        };
        this.$store.dispatch("fileUpload", manualObj);
      }
      //set dataObject
      const dataObject = {
        equipmentName: values.equipmentName,
        manufacturer: values.manufacturer,
        type: values.type,
        equipmentCategory: values.equipmentCategory,
        purchaseDate: values.purchaseDate,
        purchasePrice: values.purchasePrice,
        serviceLife: values.serviceLife,
        maintenanceInterval: values.maintenanceInterval,
        invoice: invoicePath,
        manual: manualPath,
        equipmentImage: imagePath,
        id: values.equipmentId,
        dealer: values.dealer,
        dealerName: values.dealerName,
        label: values.label,
        discarded: false,
        latestReviewTimeStamp: 0,
        latestReviewString: "",
        nextReviewTimeStamp: 0,
        nextReviewString: "",
      };

      //set data for reviews/maintenance
      //first: set data for case "new equipment"
      let date;
      let interval;
      let nextReviewObj = {};
      if (this.mode === "new") {
        date = Number(Date.parse(values.purchaseDate));
        interval = Number(values.maintenanceInterval);
        nextReviewObj = this.getNextReviewDate(date, interval);
        dataObject.latestReviewString = "noch nie gewartet";
        dataObject.latestReviewTimeStamp = 0;
        dataObject.nextReviewString = nextReviewObj.nextReviewDisplay;
        dataObject.nextReviewTimeStamp = nextReviewObj.nextReviewTimeStamp;
        
      }
      //set data for existing equipment
      else {
        if (values.maintenanceInterval != this.item.maintenanceInterval){
          //possible cases: existing review(s) vs. no existing review
          //first case: no existing reviews (latestReviewTimeStamp === 0)
          if (this.item.latestReviewTimeStamp === 0) {
              date = Number(Date.parse(values.purchaseDate));
              interval = Number(values.maintenanceInterval);
              nextReviewObj = this.getNextReviewDate(date, interval);
              dataObject.latestReviewString = "noch nie gewartet";
              dataObject.latestReviewTimeStamp = 0;
              dataObject.nextReviewString = nextReviewObj.nextReviewDisplay;
              dataObject.nextReviewTimestamp = nextReviewObj.nextReviewTimeStamp;
          }
              else {
                date = Number(this.item.latestReviewTimeStamp);
                interval = Number(values.maintenanceInterval);
                nextReviewObj = this.getNextReviewDate(date, interval);
                dataObject.latestReviewString = this.item.latestReviewString;
                dataObject.latestReviewTimeStamp = this.item.latestReviewTimeStamp;
                dataObject.nextReviewString = nextReviewObj.nextReviewDisplay;
                dataObject.nextReviewTimeStamp = nextReviewObj.nextReviewTimeStamp;
          }
        }
      }

      if (dataObject.maintenanceInterval === undefined) {
        dataObject.maintenanceInterval = 0;
      }

      for (let key in dataObject) {
        if (dataObject[key] === undefined) {
          dataObject[key] = "";
        }
      }

      let path = "equipment";

      const payload = {
        collection: path,
        id: Number(dataObject.id),
        mode: this.mode,
        data: dataObject,
      };

      await this.$store
        .dispatch("setData", payload)
        .then(() => {
          if (this.mode !== "edit") {
            this.$store.dispatch("updateNewId", Number(dataObject.id));
          }
          this.message = true;
          this.isLoading = false;
          EventBus.emit("notify", {
            type: "success",
            title: "Equipment gespeichert",
            message:
              "Die Daten wurden erfolgreich in die Datenbank geschrieben.",
            subMessage: "Sie werden automatisch weitergeleitet.",
            iconAsButton: true,
            action: "redirect",
            icon: "faIcon fa-solid fa-circle-check",
            timeOut: true,
            componentName: "EquipmentPage",
          });
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },

    getNextReviewDate(date, maintenanceInterval) {
      let nextReviewDate = "";
      let nextReviewTimeStamp = date + maintenanceInterval;
      let nextReviewDisplay = "";
      if (maintenanceInterval != "0") {
        nextReviewDate = new Date(nextReviewTimeStamp);
        let month = ("0" + (nextReviewDate.getMonth() + 1)).slice(-2);
        let year = String(nextReviewDate.getFullYear());
        nextReviewDisplay = `${year} ${month}`;
      } else {
        nextReviewDisplay = "bei Bedarf";
      }
      let returnObj = {
        nextReviewDisplay: nextReviewDisplay,
        nextReviewTimeStamp: nextReviewTimeStamp,
      };
      return returnObj;
    },

    getPath(file, fileType, id) {
      const dataType = file.name.substring(
        file.name.length - 3,
        file.name.length
      );
      const path = `equipment/${fileType}/${fileType}-${id}.${dataType}`;
      return path;
    },

    showFeedback() {
      this.message = true;
    },
    cancelNewEquipment() {
      this.$router.push({ name: "EquipmentPage" });
    },
  },

  beforeMount() {
    if (this.$route.params.id != undefined) {
      this.newEquipment = {};
      this.itemId = Number(this.$route.params.id);
      this.mode = "edit";
      this.newEquipment = { ...this.item };
      this.id = this.itemId;
      this.equipmentCategory = this.newEquipment.equipmentCategory;
    }
  },
  mounted() {},
};
</script>

<style scoped></style>
