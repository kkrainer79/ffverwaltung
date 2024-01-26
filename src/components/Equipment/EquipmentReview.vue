<template>
  <div class="container-flex">
    <the-nav-bar @changeComponent="changeComponent"></the-nav-bar>
    <div class="container">
      <div class="d-flex align-items-center justify-content-center">
        <h1>EQUIPMENT-WARTUNG</h1>
      </div>

      <div class="container">
        <Form>
          <div class="row d-flex align-items-center justify-content-center">
            <div class="col-6">
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
                    <span
                      class="fa-solid fa-magnifying-glass review-icon"
                    ></span>
                  </span>
                  <span v-else class="input-group-text review-found">
                    <span class="fa-solid fa-check review-icon"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div class="container mt-4" v-if="itemFound">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-10">
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
                  {{ this.item[0].label }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 d-flex align-items-center justify-content-center">
          <div class="col-10">
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
                          id="reviewText"
                          placeholder="Anmerkungen..."
                        >
                        </Field>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
              <span class="card-footer">{{ this.displayedTime }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-4">
          <div class="col-1"></div>
          <div class="col">
            <div class="d-grid">
              <button class="btn btn-cancel" @click="cancelReview">Abbrechen</button>
            </div>
          </div>
          <div class="col">
            <div class="d-grid">
              <button id="saveBtn" class="btn btn-ffp" @click="saveReview">Speichern</button>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <UserNotification
        :show="this.showNotification"
        :notificationObj="this.notificationObj"
      ></UserNotification>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
import { Form, Field } from "vee-validate";
import TheNavBar from "../TheNavBar.vue";
import UserNotification from "../Tools/UserNotification.vue";

/* import * as yup from "yup"; */

export default {
  name: "EquipmentReview",
  data() {
    return {
      equipments: store.getters.equipments,
      userEmail: store.getters.userEmail,
      searchId: 0,
      item: [],
      itemFound: false,
      displayedTime: "",
      timeStamp: "",
      timeString: "",
      reviewId: "",
      reviewDate: "",
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
      showNotification: false,
    };
  },
  components: {
    Form,
    Field,
    TheNavBar,
    UserNotification,
  },
  /*  props: {
    itemId: Number,
  }, */

  computed: {
    redirectComponent() {
      if (screen.width < 992) {
        return "DashboardPage";
      } else {
        return "EquipmentPage";
      }
    },
  },
  methods: {
    findEquipment() {
      this.itemFound = false;
      document.getElementById("saveBtn").disabled = true;
      this.item = [];
      for (let i = 0; i < this.equipments.length; i++) {
        if (this.equipments[i].id === this.searchId) {
          this.item.push(this.equipments[i]);
        }
      }
      if (this.item.length > 0) {
        document.getElementById("saveBtn").disabled = false;
        this.itemFound = true;
        this.getTimeStamp();
      }
    },
    getTimeStamp() {
      /* let time = "now"
      let date = String with date from "now" */
      this.timeStamp = new Date().getTime();
      let date = new Date(this.timeStamp);

      //set options for this.displayedTime (shown on card-footer)
      let options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      this.displayedTime = date.toLocaleString("de-AT", options);

      //set options for reviewId &
      options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      this.timeString = date.toLocaleString("de-AT", options);
      let day = ("0" + date.getDate()).slice(-2);
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let year = String(date.getFullYear());
      let hour = ("0" + date.getHours()).slice(-2);
      let minutes = ("0" + date.getMinutes()).slice(-2);
      let seconds = ("0" + date.getSeconds()).slice(-2);

      this.reviewId = `${this.item[0].id}${year}${month}${day}${hour}${minutes}${seconds}`;
      this.reviewDate = `${year}-${month}-${day}`;
    },
    async saveReview() {
      let path = `equipment/${this.item[0].id}/reviews/`;
      let reviewText = document.getElementById("reviewText").value;
      let dataObj = {
        id: this.reviewId,
        user: this.userEmail,
        time: this.timeStamp,
        timeString: this.timeString,
        reviewText: reviewText,
      };

      const reviewPayload = {
        collection: path,
        id: this.reviewId,
        data: dataObj,
      };

      let nextReviewData = this.getNextReviewDate(
        this.reviewDate,
        this.item[0].maintenanceInterval
      );

      let updateObj = {
        latestReviewString: this.reviewDate,
        latestReviewTimeStamp: this.timeStamp,
        nextReviewString: nextReviewData.nextReviewString,
        nextReviewTimeStamp: nextReviewData.nextReviewTimeStamp,
      };
      let updatePayload = {
        collection: "equipment",
        docId: this.item[0].id,
        data: updateObj,
      };

      await this.$store
        .dispatch("setData", reviewPayload)
        .then(() => {
          this.$store.dispatch("updateDocument", updatePayload);
        })
        .then(() => {
          this.$store.dispatch("getSingleDocument", updatePayload);
        })
        .then(() => {
          this.notificationObj = {
            type: "success",
            title: "Wartung gespeichert",
            message:
              "Die Daten wurden erfolgreich in die Datenbank geschrieben.",
            subMessage: "Sie werden automatisch weitergeleitet.",
            iconAsButton: true,
            button: false,
            action: "redirect",
            icon: "faIcon fa-solid fa-circle-check",
            timeOut: true,
            componentName: this.redirectComponent,
            target: "",
            id: "",
          };
          this.showNotification = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelReview() {
      this.$router.go(-1);
    },
    getNextReviewDate(date, maintenanceInterval) {
      let nextReviewDate = "";
      let nextReviewTime =
        Number(Date.parse(date)) + Number(maintenanceInterval);
      if (maintenanceInterval != "0") {
        nextReviewDate = new Date(nextReviewTime);
        let month = ("0" + (nextReviewDate.getMonth() + 1)).slice(-2);
        let year = String(nextReviewDate.getFullYear());
        nextReviewDate = `${year} ${month}`;
      } else {
        nextReviewDate = "bei Bedarf";
      }
      let returnObj = {
        nextReviewString: nextReviewDate,
        nextReviewTimeStamp: nextReviewTime,
      };
      return returnObj;
    },
  },
  created() {},

  mounted() {
    if (this.$route.params.id) {
      this.searchId = Number(this.$route.params.id);
      this.findEquipment();
    }
  },
};
</script>

<style scoped></style>
