<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
.router-link-active {
  color: #5fcf80 !important;
}

a {
  text-decoration: none !important;
}

.form-control:focus {
  border-color: #5fcf80 !important;
  box-shadow: 0 1px 1px rgba(95, 207, 129, 0.075) inset,
    0 0 8px rgba(95, 207, 129, 0.075) !important;
  outline: 0 none !important;
}
</style>
