<template>
  <transition name="fade" mode="out-in">
    <div
      v-show="show"
      v-if="type == 'warning'"
      id="userNotification"
      class="userNotification"
      :class="notificationClasses"
    >
      <div><i class="fa-solid fa-circle-check faIcon"></i></div>
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
      :class="notificationClasses"
    >
      <div><i class="fa-solid fa-circle-check faIcon"></i></div>
      <div class="userNotificationTitle">{{ this.title }}</div>
      <button v-if="showButton" @click="runAction()">
        {{ this.buttonTitle }}
      </button>
    </div>
    <div
      v-show="show"
      v-else
      id="userNotification"
      class="userNotification"
      :class="notificationClasses"
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
      action: "",
      showButton: false,
      buttonTitle: "",
      timeOut: true,
      componentName: "",
    };
  },

  computed: {
    notificationClasses() {
      return {
        "bg-green": this.type === "success",
        "bg-orange": this.type === "warning",
        "bg-red": this.type === "failure",
      };
    },
  },

  methods: {
    performAction() {
    },
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
      this.action = data.action;
      this.show = true;
      this.timeOut = data.timeOut;
      this.componentName = data.componentName;
      this.buttonTitle = data.buttonTitle;


      if (this.timeOut) {
      setTimeout(
        function () {
          this.clearNotification();
        }.bind(this),
        3000
      )} else {
        this.showButton = true;
      }
    },

    runAction() {
      switch (this.action) {
        case "close":
          this.clearNotification();
          break;
          case "redirect": {
            this.clearNotification();
            this.$router.push( {name: this.componentName });
          }
      }
    },

    clearNotification() {
      this.show = false;

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


EventBus.emit("notify", {
    type: "warning",
    title: "Event erfolgreich abgefeuert",
    message: "Hier kommt eine Nachricht hin",
    action: "close",
    showButton: false,
    timeOut: true,
  });