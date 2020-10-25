<template>
  <div class="container d-flex justify-content-center">
    <div class="card mb-3 mt-5 form-card shadow-sm">
      <div class="card-header">
        <h1>Forgot Password</h1>
      </div>
      <base-alert :msgArray="error" alert="alert-warning"></base-alert>
      <div class="card-body text-primary">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            v-model.trim="email"
            @input="onchange"
            required="true"
          />
          <p style="color: red;font-size:11px;" v-if="isEmpty">
            Email must not be empty
          </p>
        </div>
        <div class="d-flex justify-content-between">
          <base-button mode="btn primary" @click="forgotPassword">
            <span v-if="!loading">Send</span>
            <span v-else>
              <base-spinner width="20" height="20"></base-spinner>
            </span>
          </base-button>
          <base-button mode="btn primary-text" link to="/login"
            >Login?</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      loading: false,
      isEmpty: false
    };
  },
  computed: {
    ...mapGetters(["error"])
  },
  methods: {
    onchange() {
      if (this.email !== "" && this.email > 3) {
        this.isEmpty = false;
      }
    },
    forgotPassword() {
      if (this.email === "") {
        this.isEmpty = true;
        return;
      }

      this.loading = true;
      this.$store
        .dispatch("forgotpassword", { email: this.email })
        .then(res => {
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.card-header {
  margin-bottom: 20px;
}
</style>