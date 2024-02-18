<template>
  <transition name="fade" mode="out-in">
    <div
      v-show="show"
      id="userNotification"
      class="userNotification"
      :class="notificationClass"
    >
      <div class="userNotificationTitle">{{ this.title }}</div>
      <div class="userNotificationMessage">{{ this.message }}</div>
      <div class="userNotificationSubMessage">
        {{ this.subMessage }}
      </div>
      <div v-if="this.action === 'saveMaintenanceSchedule'">
        <Form>
          <div
            v-for="(maintenance, index) in this.maintenanceArray"
            :key="index"
            class="row mb-1"
          >
            <div class="col-1">
              {{ index + 1 }}
            </div>

            <div class="col">
              <Field
                as="select"
                :name="`type${index}`"
                :id="`type${index}`"
                class="form-control"
                required
                @change="showSaveMaintenanceIcon(index)"
              > 
                <option value="" disabled>Art wählen</option>
                <option value="option1-1">Option1 1</option>
                <option value="option1-2">Option1 2</option>
                <option value="option1-3">Option1 3</option>
                <option value="option1-4">Option1 4</option>
              </Field>
            </div>
            <div class="col">
              <Field
                as="select"
                :name="`interval${index}`"
                :id="`interval${index}`"
                class="form-control"
                required
                @change="showSaveMaintenanceIcon(index)"
              >
                <option value="" disabled selected>Intervall wählen</option>
                <option value="option2-1">Option2 1</option>
                <option value="option2-2">Option2 2</option>
                <option value="option2-3">Option2 3</option>
                <option value="option2-4">Option2 4</option>
              </Field>
            </div>
            <div class="col-2">
              <div class="row">
                <div class="col">
                  <i
                    class="fa-solid fa-circle-plus col"
                    type="button"
                    title="neue Zeile"
                    style="visibility: hidden"
                    :id="`saveIcon${index}`"
                    @click="addRow(index)"
                  ></i>
                </div>
                <div class="col">
                  <i
                    class="fa-solid fa-circle-xmark col userNotificationIconCancel"
                    type="button"
                    title="löschen"
                    style="visibility: hidden"
                    :id="`deleteIcon${index}`"
                    @click="deleteSelected(index)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div v-if="!this.button" class="mt-5 userNotificationIcon">
        <i
          v-if="this.iconAsButton"
          type="button"
          id="mainIcon"
          class="userNotificationIconAsButton"
          :class="this.icon"
          @click="clickListener()"
        ></i>
        <i v-else :class="this.icon"></i>
      </div>
      <div v-else class="container">
        <div class="row">
          <div class="col-1"></div>
          <div class="d-grid col-4">
            <button
              type="button"
              class="btn btn-lg btn-cancel"
              @click="buttonHandler('userNotification_no')"
            >
              NEIN
            </button>
          </div>
          <div class="col-2"></div>
          <div class="d-grid col-4">
            <button
              type="button"
              class="btn btn-lg btn-yes"
              @click="buttonHandler('userNotification_yes')"
            >
              JA
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<!-- TUTORIAL: https://serversideup.net/vue-3-web-notification-component/ -->
<script>
import { Form, Field } from "vee-validate";

export default {
  data() {
    return {
      type: "",
      title: "",
      message: "",
      subMessage: "",
      action: "",
      icon: "",
      iconAsButton: false,
      button: false,
      timeOut: false,
      componentName: "",
      target: "",
      id: 0,
      time: 3500,
      maintenanceArray: [
        {
          maintenanceType: "",
          maintenanceInterval: "",
        },
      ],
    };
  },

  components: {
    Form,
    Field,
  },

  props: {
    notificationObj: Object,
    show: Boolean,
    maintenanceSchedule: Array,
  },

  computed: {
    notificationClass() {
      return {
        userNotificationSuccess: this.type === "success",
        "notification-warning": this.type === "warning",
        "notification-failure": this.type === "failure",
        userNotificationQuestion:
          this.type === "question" || this.type === "review",
      };
    },
    
  },

  methods: {
    showSaveMaintenanceIcon(index) {
      let a = document.getElementById(`type${index}`).value;
      let b = document.getElementById(`interval${index}`).value;
      if (a && b) {
        document.getElementById(`saveIcon${index}`).style.visibility =
          "visible";
          document.getElementById(`deleteIcon${index}`).style.visibility =
          "visible";
      } else {
        document.getElementById(`saveIcon${index}`).style.visibility = "hidden";
      }
      this.saveSelected(index);
    },

    handleNotification() {
      this.button = this.notificationObj.button;
      this.type = this.notificationObj.type;
      this.title = this.notificationObj.title;
      this.message = this.notificationObj.message;
      this.subMessage = this.notificationObj.subMessage;
      this.action = this.notificationObj.action;
      this.timeOut = this.notificationObj.timeOut;
      this.componentName = this.notificationObj.componentName;
      this.icon = this.notificationObj.icon;
      this.iconAsButton = this.notificationObj.iconAsButton;
      this.target = this.notificationObj.target;
      this.id = this.notificationObj.id;
      this.data = this.notificationObj.data;

      if (this.action === "saveMaintenanceSchedule" && this.data != undefined) {
        this.maintenanceArray = this.data;
      }

      if (this.timeOut) {
        setTimeout(this.runAction, this.time);
      }
    },

    runAction() {
      switch (this.notificationObj.action) {
        case "close":
          console.log("close started");
          this.clearNotification();
          break;
        case "redirect":
          this.$router.push({ name: this.componentName });
          this.clearNotification();
          break;
        case "autoLogout":
          this.$router.push({ name: this.componentName });
          this.clearNotification();
          break;
        case "saveMaintenanceSchedule":
          if (
            this.maintenanceArray[0].maintenanceType == "" ||
            this.maintenanceArray[0].maintenanceInterval == ""
          ) {
            this.$emit("userInput");
          } else if (
            this.maintenanceArray[this.maintenanceArray.length - 1]
              .maintenanceType == "" ||
            this.maintenanceArray[this.maintenanceArray.length - 1]
              .maintenanceInterval == ""
          ) {
            this.maintenanceArray.pop(); //removes last element of array
          }
          this.$emit("userInput", this.maintenanceArray);
          this.maintenanceArray = [];
          this.maintenanceArray[0] = {
            maintenanceType: "",
            maintenanceInterval: "",
          };
      }
    },

    clearNotification() {
      this.type = "";
      this.title = "";
      this.message = "";
      this.subMessage = "";
      this.action = "";
      this.timeOut = false;
      this.componentName = "";
      this.icon = "";
      this.iconAsButton = "";
      this.button = false;
      this.data = "";
    },

    clickListener() {
      this.runAction();
    },

    buttonHandler(decision) {
      let payload = {
        target: this.target,
        action: decision,
        id: this.id,
      };
      this.$emit("userInput", payload);
    },

    saveSelected(index) {
      let maintenanceType = document.getElementById(`type${index}`).value;
      let maintenanceInterval = document.getElementById(
        `interval${index}`
      ).value;

      this.maintenanceArray[index] = {
        maintenanceType: maintenanceType,
        maintenanceInterval: maintenanceInterval,
      };
      if (maintenanceType == "" || maintenanceInterval == "") {
        document.getElementById("mainIcon").style.visibility = "hidden";
      } else {
        document.getElementById("mainIcon").style.visibility = "visible";
      }
    },

    deleteSelected(index) {
      //only splice array when item is found and item is not last item.
      if (index > -1 && this.maintenanceArray.length >1) {
        //2nd parameter ins splice means: remove one
        this.maintenanceArray.splice(index, 1);
      }
    },

    addRow(index) {
      this.maintenanceArray[index + 1] = {
        maintenanceType: "",
        maintenanceInterval: "",
      };
    },
  },

  updated() {},

  beforeUpdate() {
    this.handleNotification();
  },

  unmounted() {},
};
</script>

<style scoped></style>
