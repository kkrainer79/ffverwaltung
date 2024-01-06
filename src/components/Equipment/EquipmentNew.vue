<template>
  <div class="container">
    <h1>EQUIPMENT ANLEGEN</h1>
    <Form
      id="newEquipmentForm"
      class="text-start mt-5"
      @submit="submitData"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="equipmentName">Bezeichnung</label>
          <Field
            as="input"
            name="equipmentName"
            type="text"
            class="form-control"
            id="equipmentName"
          />
          <small class="text-danger" v-if="errors.equipmentName">{{
            errors.equipmentName
          }}</small>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="manufacturer">Hersteller/Marke</label>
          <Field
            as="input"
            name="manufacturer"
            type="text"
            class="form-control"
            id="manufacturer"
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
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="equipmentCategory">Kategorie</label>
          <Field
            as="select"
            name="equipmentCategory"
            class="form-control"
            id="equipmentCategory"
          >
            <option value="manEquipment" name="1">Mann-Ausrüstung</option>
            <option value="vehicleEquipment" name="2">
              Fahrzeug-Ausrüstung
            </option>
            <option value="departmentEquipment" name="2">
              Rüsthaus-Ausrüstung
            </option>
            <option value="otherEquipment" name="2">sonstige Ausrüstung</option>
            <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
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
          />
          
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="dealerName">Händler-Kontakt (Name, Telefon etc.)</label>
          <Field
            as="input"
            name="dealerName"
            type="text"
            class="form-control"
            id="dealerName"
          />
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-lg-2 col-md-3">
          <label for="purchaseDate">Kaufdatum</label>
          <Field
            as="input"
            name="purchaseDate"
            type="date"
            class="form-control"
            id="purchaseDate"
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
          >
            <option value="1">monatlich</option>
            <option value="3">vierteljährlich</option>
            <option value="6">halbjährlich</option>
            <option value="6">jährlich</option>
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
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <label for="equipmentId">automatisch generierte Equipment-ID</label>
          <Field
            as="input"
            name="equipmentId"
            type="text"
            class="form-control"
            id="equipmentId"
            :value="newId"
            readonly
          >
          </Field>
          <!-- <small class="text-danger" v-if="errors.email">{{
              errors.email
            }}</small> -->
        </div>
      </div>
      <div class="row mt-5">
        <div class="form-group col-lg-2">
          <div class="d-grid">
            <button v-if="!message" class="btn btn-cancel"  @click="cancelNewEquipment">Abbrechen</button>
          </div>
        </div>
        <div class="form-group col-lg-2 offset-2">
          <div class="d-grid">
            <button class="btn btn-ffp" v-if="!message">
              <span>Speichern</span>
            </button>
            <button class="btn btn-ffp" v-if="message">
              <span>Daten gespeichert!</span>
            </button>
          </div>
          <div class="col-10 offset-1 text-danger text-center mt-2">
            <!-- <small v-if="error">{{ errorText }}</small> -->
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import store from "@store/index.js";

export default {
  name: "EquipmentNew",
  data() {
    const schema = yup.object().shape({
      equipmentName: yup
        .string()
        .required("Equipment-Bezeichnung ist ein Pflichtfeld")
        .trim(),
      manufacturer: yup.string().trim(),
      type: yup.string().trim(),
      purchaseDate: yup.date("Bitte korrektes Datum eingeben!"),
      purchasePrice: yup.number("Muss eine Zahl sein!"),
      serviceLife: yup.number("Muss eine Zahl sein!"),
    });

    return {
      schema,
      isLoading: false,
      fileType: "",
      message: false,
    };
  },

  computed: {
    newId() {
      return store.getters.newId;
    },
  },

  components: {
    Form,
    Field,
  },

  methods: {
    async submitData(values) {
      this.isLoading = true;
      let imagePath = "";
      let invoicePath = "";
      let manualPath = "";

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
        equipmentId: values.equipmentId,
        status: "",
        dealer: values.dealer,
        dealerName: values.dealerName,
      };

      for (let key in dataObject) {
        if (dataObject[key] === undefined) {
          dataObject[key] = "";
        }
      }

      const payload = {
        collection: "equipment",
        data: dataObject,
      };

      await this.$store
        .dispatch("dataUpload", payload)
        .then(() => {
          this.$store.dispatch(
            "updateEquipmentId",
            Number(dataObject.equipmentId)
          );
          this.showFeedback();
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
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
      setTimeout(() => {
        this.$emit("change-component", {componentName: "EquipmentTable"});
        this.message = false;
      }, 2000);
    },
    cancelNewEquipment(){
      this.$emit("change-component", {componentName: "EquipmentTable"});
    },
  },
};
</script>

<style scoped></style>
