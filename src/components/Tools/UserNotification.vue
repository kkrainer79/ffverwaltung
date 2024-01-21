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
      <div v-if="!this.button" class="userNotificationIcon">
        <i
          v-if="this.iconAsButton"
          type="button"
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
    };
  },

  props: {
    notificationObj: Object,
    show: Boolean,
  },

  computed: {
    notificationClass() {
      return {
        userNotificationSuccess: this.type === "success",
        "notification-warning": this.type === "warning",
        "notification-failure": this.type === "failure",
        userNotificationQuestion: this.type === "question",
      };
    },
  },

  methods: {
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
    },

    clickListener() {
      this.runAction();
    },

    buttonHandler(decision) {
      let payload = {
        target: this.target,
        action: decision,
        id: this.id,
      }
      this.$emit("userInput", payload);

    },
  },

  mounted() {},
  beforeUpdate() {
    this.handleNotification();
  },
};
</script>

<style scoped></style>
