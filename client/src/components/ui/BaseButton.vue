<template>
  <div>
    <button type="submit" v-if="!link" :class="mode">
      <slot></slot>
    </button>
    <router-link :to="to" v-else :class="mode">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      require: false,
      default: null
    },
    link: {
      type: Boolean,
      require: false,
      default: false
    },
    to: {
      type: String,
      require: false,
      default: "/"
    }
  }
};
</script>

<style scoped>
.primary-text {
  color: #5fcf80;
}
.primary-text:hover {
  text-decoration: underline !important;
}
.primary {
  background: #5fcf80;
  color: white;
  font-weight: 400;
}
.primary:hover {
  background: rgb(61, 133, 83);
  color: white;
  font-weight: 400;
}
</style>