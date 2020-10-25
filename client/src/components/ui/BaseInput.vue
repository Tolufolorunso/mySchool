<template>
  <div class="form-group">
    <label :for="labelFor">{{ labelName }}</label>
    <input
      :type="inputType"
      class="form-control"
      :id="labelFor"
      aria-describedby="emailHelp"
      :v-model=""
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    labelFor: {
      type: String,
      require: false,
      default: null
    },
    labelName: {
      type: String,
      require: false,
      default: null
    },
    inputType: {
      type: String,
      require: false,
      default: null
    },
    vname: {
      type: String,
      require: false,
      default: null
    }
  }
};
</script>

<style>
</style>