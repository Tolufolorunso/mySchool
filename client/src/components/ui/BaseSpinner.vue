<template>
  <div
    className="spinner"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></div>
</template>

<script>
export default {
  props: ["width", "height"]
};
</script>

<style>
.spinner::after {
  content: "";
  width: 20px;
  height: 20px;
  border: 4px solid #f3f3f3;
  border-top: 5px solid #f25a41;
  border-bottom: 5px solid #0eadf4;
  border-radius: 100%;
  will-change: transform;
  animation: spin 1s infinite linear;
  margin: auto;
  display: block;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>