<template>
  <transition name="fade" mode="out-in">
    <div
      v-show="show"
      type="success"
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
  </transition>
</template>

<!-- TUTORIAL: https://serversideup.net/vue-3-web-notification-component/ -->
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
      time: 3500,
      timeoutId: 0,
    };
  },

  computed: {
    notificationClass() {
      return {
        userNotificationSuccess: this.type === "success",
        "notification-warning": this.type === "warning",
        "notification-failure": this.type === "failure",
      };
    },
  },

  methods: {
    bindEvents() {
      EventBus.on(
        "notify",
        function (data) {
          this.handleNotification(data);
        }.bind(this)
      );
    },

    handleNotification(data) {
      this.show = true;
      this.type = data.type;
      this.title = data.title;
      this.message = data.message;
      this.subMessage = data.subMessage;
      this.action = data.action;
      this.timeOut = data.timeOut;
      this.componentName = data.componentName;
      this.icon = data.icon;
      this.iconAsButton = data.iconAsButton;

      if (this.timeOut) {
        setTimeout(
          function () {
            this.runAction();
          }.bind(this),
          this.time
        );
      } else {
        this.runAction();
      }
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
          this.$router.push({ name: this.componentName });
          this.clearNotification();
          break;
      }
    },

    clearNotification() {
      this.show = false;
      this.type = "";
      this.title = "";
      this.message = "";
      this.subMessage = "";
      this.action = "";
      this.timeOut = false;
      this.componentName = "";
      this.icon = "";
      this.iconAsButton = "";
    },
  },

  mounted() {
    //attaches an event-listener which listens to the "notify-emit"
    this.bindEvents();
  },
};
</script>

<style scoped></style>
