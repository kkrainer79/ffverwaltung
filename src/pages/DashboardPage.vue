<template>
<div>
  <h1>DASHBOARD</h1>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="col-6">
          <div class="card" @click="changeComponent('EquipmentPage')">
            <div class="card-header">
              EQUIPMENT
            </div>
            <div type="button" class="card-body">
              Zur Equipment-Übersicht
            </div>
        </div>
        </div>
        
      </div>
    </div>

  </div>

</div>
</template>

<script>
export default {
name: "DashboardPage",
methods: {
changeComponent(componentName){
  this.$emit("changeComponent", {componentName: componentName});
}
},
}
</script>

<style scoped>

</style>