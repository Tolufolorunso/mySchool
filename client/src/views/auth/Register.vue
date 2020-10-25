<template>
  <div class="container d-flex justify-content-center">
    <div class="card mb-3 mt-5 form-card shadow-sm">
      <div class="card-header">
        <h1>Register</h1>
      </div>
      <div class="card-body text-primary">
        <Auth
          :submitForm="registerUser"
          buttonText="Sign up"
          :loading="loading"
          :isRegister="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../../components/Auth";
import Alert from "../../components/Alert";
import { mapGetters } from "vuex";

export default {
  components: {
    Auth,
    Alert
  },
  data() {
    return {
      loading: false,
      success: { msg: "Registration successful, please login" }
    };
  },
  computed: {
    ...mapGetters(["registerError", "registrationSuccess"])
  },
  watch: {
    registerError() {
      if (this.registerError) {
        console.log(this.registerError);
        return this.registerError;
      }
    },
    registrationSuccess() {
      console.log(this.registrationSuccess);
      return this.registrationSuccess;
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    registerUser(data) {
      this.loading = true;
      this.$store.dispatch("register", data).then(res => {
        if (res) {
          this.success = { msg: "Registration success" };
          // this.$router.push("/login");
        }
      });
      this.loading = false;
    }
  }
};
</script>

<style>
</style>