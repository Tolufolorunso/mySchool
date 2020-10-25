<template>
  <div>
    <h1>profile</h1>
    <div class="container">
      <form
        action="forms/contact.php"
        method="post"
        role="form"
        class="php-email-form"
      >
        <div class="form-row">
          <div class="col-md-6 form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              placeholder="Your Name"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div class="validate"></div>
          </div>
          <div class="col-md-6 form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              data-rule="email"
              data-msg="Please enter a valid email"
            />
            <div class="validate"></div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              placeholder="Your Name"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div class="validate"></div>
          </div>
          <div class="col-md-6 form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              data-rule="email"
              data-msg="Please enter a valid email"
            />
            <div class="validate"></div>
          </div>
        </div>
        <div class="mb-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  created() {
    this.$store.dispatch("getUser");
  },
  computed: {}
};
</script>

<style>
.php-email-form input:focus {
  border-color: #5fcf80;
}
</style>