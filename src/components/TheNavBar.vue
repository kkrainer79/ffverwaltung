<template>
  <div class="navbar-ffp">
    <nav class="navbar navbar-expand-lg">
      <div class="container py-1">
        <a class="" @click="changeComponent('DashboardPage')">
          <img src="@assets/logo.png" class="navbar-img" type="button" />
        </a>
        <div class="collapse navbar-collapse mx-4" id="navbar">
          <ul class="navbar-nav">
            <li
              v-for="item in menu"
              :key="item.path"
              class="nav-item active"
              type="button"
            >
              <a class="nav-link" @click="changeComponent(item.path)"
                >{{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-3">
            <i class="fa-solid fa-gear navbar-icon" type="button"></i>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-user navbar-icon" type="button"></i>
          </div>
          <div class="col-3">
            <button
              class="btn btn-logout"
              type="button"
              @click="logOut"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
  data() {
    return {
      menu: [
        {
          name: "Dashboard",
          path: "DashboardPage",
        },
        {
          name: "Equipment",
          path: "EquipmentPage",
        },
        {
          name: "Atemschutz",
          path: "AtemschutzPage",
        },
        {
          name: "Bekleidung",
          path: "ClothingPage",
        },
      ],
    };
  },

  props: {
    activePage: String,
  },

  emits: {
    "changeComponent": true,
  },

  computed: {},

  methods: {
    logOut() {
      this.$store
        .dispatch("logOut")
        .then(() => {
          this.$router.push({ name: "LoginPage" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeComponent(componentName) {
      this.$router.push({name: componentName });
    },
  },
};
</script>

<style scoped></style>
