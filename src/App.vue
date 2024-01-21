<template>
  <router-view v-slot="{Component}">
    <transition name="fade" appear mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> 
</template>

<script>


export default {
  name: "App",
  components: {
  },
  
  computed: {
    token() {
      return this.$store.getters.idToken;
    },
  },

created() {
  this.$store.dispatch("autoLogIn");
},
watch: {
  idToken: {
    handler() {
      if (this.idToken) {
        this.$store.dispatch("getData");
      }
    },
    immediate: true,
  },
},

};
</script>

<style>
@import "@/styles/style.css";

</style>
