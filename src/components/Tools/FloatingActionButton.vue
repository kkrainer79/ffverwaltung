<template>
  <div id="container-floating">
    <div id="subfab5" class="subfab subfab5" :class="fabColors[5]">
      <i :class="fabIcons[5]"></i>
    </div>
    <div id="subfab4" class="subfab subfab4" :class="fabColors[4]">
      <i :class="fabIcons[4]"></i>
    </div>
    <div id="subfab3" class="subfab subfab3" :class="fabColors[3]">
      <i :class="fabIcons[3]"></i>
    </div>
    <div id="subfab2" class="subfab subfab2" :class="fabColors[2]">
      <i :class="fabIcons[2]"></i>
    </div>
    <div id="subfab1" class="subfab subfab1" :class="fabColors[1]">
      <i
        :action="fabActions[1]"
        :class="fabIcons[1]"
        @click="emitUserInput"
      ></i>
    </div>
    <!-- FLOATING ACTION BUTTON MAIN-FAB -->
    <div id="floating-button">
      <span class="mainfab-front" :class="fabIcons[0]"></span>
      <span
        class="mainfab-active"
        :componentName="fabComponentNames[0]"
        :action="fabActions[0]"
        :itemId="fabItemIds[0]"
        :class="fabMenus[0].activeIcon"
        @click="emitUserInput"
      ></span>
    </div>
    <!-- END MAIN-FAB -->
  </div>
</template>

<script>
export default {
  name: "FloatingActionButton",
  props: {
    fabMenus: {
      type: Array,
      required: true,
    },
  },
  computed: {
    fabIcons() {
      let icons = [];
      for (let i = 0; i < this.fabMenus.length; i++) {
        icons.push(this.fabMenus[i].icon);
      }
      return icons;
    },
    fabColors() {
      let colors = [];
      for (let i = 0; i < this.fabMenus.length; i++) {
        colors.push(this.fabMenus[i].colors);
      }
      return colors;
    },
    fabActions() {
      let action = [];
      for (let i = 0; i < this.fabMenus.length; i++) {
        action.push(this.fabMenus[i].action);
      }
      return action;
    },
    fabComponentNames() {
      let fabComponentNames = [];
      for (let i = 0; i < this.fabMenus.length; i++) {
        fabComponentNames.push(this.fabMenus[i].componentName);
      }
      return fabComponentNames;
    },
    fabItemIds(){
      let fabItemIds = [];
      for (let i = 0; i< this.fabMenus.length; i++) {
        fabItemIds.push(this.fabMenus[i].itemId);
      }
      return fabItemIds;
    },
  },

  methods: {
    emitUserInput(event) {
      let action = event.target.attributes.action.value;
      let componentName = event.target.attributes.componentName.value;
      let itemId = event.target.attributes.itemId.value;
      let payload = {
        action: action,
        componentName: componentName,
        id: itemId,
      };
      this.$emit("emitUserInput", payload);
    },
  },
};
</script>

<style scoped></style>
