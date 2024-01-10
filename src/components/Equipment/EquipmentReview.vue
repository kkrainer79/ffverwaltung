<template>
  <div class="container-flex">
    <the-nav-bar @changeComponent="changeComponent"></the-nav-bar>
  <div class="container">
    <div>
      <h1>EQUIPMENT-WARTUNG</h1>
    </div>
    <Form>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="input-group mt-3">
              <Field
                as="input"
                name="searchId"
                type="number"
                class="form-control"
                id="searchId"
                v-model="this.searchId"
                @load="findEquipment"
                @keyup="findEquipment"
                placeholder="ID des Equipments eingeben..."
              >
              </Field>
              <div class="input-group-append">
                <span v-if="!itemFound" class="input-group-text">
                  <span class="fa-solid fa-magnifying-glass review-icon"></span>
                </span>
                <span v-else class="input-group-text review-found">
                  <span class="fa-solid fa-check review-icon"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>

    <div class="container mt-4" v-if="itemFound">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <div class="card-header review-card-header">
              {{ this.item[0].equipmentName }}
            </div>
            <div class="card-body">
              <span>
                {{ this.item[0].manufacturer }}
                {{ this.item[0].type }}
              </span>
              <div>
                {{ this.item[0].equipmentCategory }}
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-3">
            <div class="card">
              <div class="card-header review-capture-card">
                WARTUNG ERFASSEN
              </div>
              <div class="card-body">
                <Form>
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <Field
                          as="textarea"
                          name="review"
                          type="text"
                          class="form-control review-textarea"
                          id="review"
                          placeholder="Anmerkungen..."
                        >
                        </Field>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
              <span class="card-footer">{{ this.timeStamp }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div v-if="itemFound" class="row mt-4">
        <div class="col-3">
          <div class="d-grid">
            <button class="btn btn-ffp" @click="saveReview">
              Speichern
            </button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3">
          <div class="d-grid">
            <button class="btn btn-cancel" @click="cancelReview">
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
import { Form, Field } from "vee-validate";
import TheNavBar from "../TheNavBar.vue";

/* import * as yup from "yup"; */

export default {
  name: "EquipmentReview",
  data() {
    return {
      equipments: store.getters.equipments,
      searchId: 0,
      item: [],
      itemFound: false,
      timeStamp: "",
    };
  },
  components: {
    Form,
    Field,
    TheNavBar,
  },
  /*  props: {
    itemId: Number,
  }, */

  computed: {},
  methods: {
    findEquipment() {
      this.itemFound = false;
      this.item = [];
      for (let i = 0; i < this.equipments.length; i++) {
        if (this.equipments[i].equipmentId === this.searchId) {
          this.item.push(this.equipments[i]);
        }
      }
      if (this.item.length > 0) {
        this.itemFound = true;
        this.getTimeStamp();
      }
    },
    getTimeStamp() {
      let time = new Date().getTime();
      let date = new Date(time);
      let options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      this.timeStamp = date.toLocaleString("de-AT", options);
    },
    saveReview() {
      console.log("save Review: to come...")
    },
    cancelReview(){
      this.$router.go(-1);
    },
  },
  created() {
    
  },

  mounted() {
    this.searchId = Number(this.$route.params.id);
    this.findEquipment();
  },
};
</script>

<style scoped></style>
