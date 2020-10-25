<template>
  <div class="container">
    <div
      class="alert alert-dismissible fade show"
      :class="alert"
      role="alert"
      v-if="msgArray !== null"
    >
      <strong>{{ msgArray.msg }}</strong>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true" @click="clearError">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: { alert: String, msgArray: Object },

  methods: {
    clearError() {
      this.$store.dispatch("clearError");
    }
  },
  beforeUnmount() {
    this.clearError();
  },
  watch: {
    msgArray() {
      if (this.msgArray) {
        return this.msgArray;
      }
    }
  }
};
</script>

<style>
</style>