<template>
  <div class="container-flex">
    <the-nav-bar @changeComponent="changeComponent"></the-nav-bar>
    <div class="container">
      <h1>ATEMSCHUTZ</h1>
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  name: "AtemschutzPage",
  components: {
    TheNavBar,
  }
};
</script>

<style scoped></style>
