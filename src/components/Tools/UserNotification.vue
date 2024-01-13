<template>
  <transition name="fade" mode="out-in">
    <div
      v-show="show"
      v-if="type == 'warning'"
      id="userNotification"
      class="userNotification"
      :class="notificationClass"
    >
      <div><i class="faIcon fa-solid fa-circle-check userNotificationIconAsButton"></i></div>
      <div class="userNotificationTitle">{{ this.title }}</div>
      <button v-if="showButton" @click="runAction()">
        {{ this.buttonTitle }}
      </button>
    </div>
    <div
      v-show="show"
      v-else-if="type == 'success'"
      id="userNotification"
      class="userNotification"
      :class="notificationClass"
    >
      <div class="userNotificationTitle">{{ this.title }}</div>
      <div>{{ this.message }}</div>
      <div class="userNotificationIcon">
        <i
          v-if="this.iconAsButton"
          type="button"
          class="userNotificationIconAsButton"
          :class="this.icon"
          @click="runAction()"
        ></i>
        <i v-else :class="this.icon"></i>
      </div>
      <div class="userNotificationSubMessage">
        {{ this.subMessage }}
      </div>
    </div>
    <div
      v-show="show"
      v-else
      id="userNotification"
      class="userNotification"
      :class="notificationClass"
    >
      <div><i class="fa-solid fa-circle-check faIcon"></i></div>
      <div class="userNotificationTitle">{{ this.title }}</div>
      <button v-if="showButton" @click="runAction()">
        {{ this.buttonTitle }}
      </button>
    </div>
  </transition>
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      show: false,
      type: "",
      title: "",
      message: "",
      subMessage: "",
      action: "",
      icon: "",
      iconAsButton: false,
      timeOut: false,
      componentName: "",
      time : 3500,
    };
  },

  computed: {
    notificationClass() {
      return {
        "userNotificationSuccess": this.type === "success",
        "notification-warning": this.type === "warning",
        "notification-failure": this.type === "failure",
      };
    },
  },

  methods: {
    performAction() {},
    bindEvents() {
      EventBus.on(
        "notify",
        function (data) {
          this.handleNotification(data);
        }.bind(this)
      );
    },

    handleNotification(data) {
      this.type = data.type;
      this.title = data.title;
      this.message = data.message;
      this.subMessage = data.subMessage;
      this.action = data.action;
      this.show = true;
      this.timeOut = data.timeOut;
      this.componentName = data.componentName;
      this.icon = data.icon;
      this.iconAsButton = data.iconAsButton;


      if (this.timeOut) {
        setTimeout(
          this.runAction,
          this.time
        );
      } else this.runAction;
    },

    runAction() {

      switch (this.action) {
        case "close":
          this.clearNotification();
          break;
        case "redirect": 
          this.$router.push({ name: this.componentName });
          this.clearNotification();
          break;
          case "autoLogout":
            this.$router.push({name: this.componentName});
            this.clearNotification();
      }
    },

    clearNotification() {
      this.show = false;
      this.time = 0;

      setTimeout(
        function () {
          this.type = "";
          this.title = "";
          this.message = "";
          this.action = "";
        }.bind(this),
        1000
      );
    },
  },

  mounted() {
    this.bindEvents();
  },
};
</script>

<style scoped></style>

EventBus.emit("notify", { type: "warning", title: "Event erfolgreich
abgefeuert", message: "Hier kommt eine Nachricht hin", action: "close",
showButton: false, timeOut: true, });
