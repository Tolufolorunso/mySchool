<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <h1 class="logo">
        <router-link class="navbar-brand" to="/">mySchool</router-link>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item active" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/login"
              >Login <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item active" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/register"
              >Register <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item active" v-if="isLoggedIn">
            <router-link class="nav-link" to="/profile"
              >Profile <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li
            class="nav-item active"
            v-if="isLoggedIn"
            @click.prevent="logoutUser"
          >
            <a class="nav-link" href="#"
              >Logout <span class="sr-only">(current)</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      loading: true
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logout");
      this.$router.replace("/login");
    }
  },
  // created() {
  //   console.log(this.loading);
  // },
  mounted() {
    this.loading = false;
  }
};
</script>

<style>
.navbar {
  box-shadow: 0px 0 18px rgba(55, 66, 59, 0.08);
}
.logo {
  font-size: 32px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #5fcf80;
}
.logo a {
  color: #5fcf80;
}

.logo img {
  max-height: 40px;
}

.navbar-brand {
  color: #5fcf80 !important;
}

@media (max-width: 992px) {
  .logo {
    font-size: 28px;
  }
}
.get-started-btn {
  margin-left: 22px;
  background: #5fcf80;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}
</style>
