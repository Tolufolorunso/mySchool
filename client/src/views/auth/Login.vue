<template>
  <div class="container d-flex justify-content-center">
    <div class="card mb-3 mt-5 form-card shadow-sm">
      <div class="card-header">
        <h1>Login</h1>
      </div>
      <div class="card-body text-primary">
        <Auth :submitForm="loginUser" buttonText="Login" :loading="loading" />
      </div>
      <base-button link to="/forgotpassword" mode="btn">
        Forgot password
      </base-button>
    </div>
  </div>
</template> 

<script>
import Auth from "../../components/Auth";

export default {
  components: {
    Auth
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    loginUser(data) {
      this.loading = true;
      this.$store
        .dispatch("login", data)
        .then(res => {
          if (res.data.success) {
            this.$router.replace("/profile");
          }
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
        });
    }
  }
};
</script>

<style>
</style>