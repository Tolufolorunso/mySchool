<template>
  <section
    id="hero"
    :style="{
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(' +
        require('@/assets/hero-bg.jpg') +
        ')'
    }"
  >
    <div
      class="container position-relative aos-init aos-animate"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <h1>Learning Today,<br />Leading Tomorrow</h1>
      <h2>
        Time to learn for free, absolutly free
      </h2>
      <router-link class="btn-get-started" to="/login">Get Started</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#hero {
  width: 100%;
  height: 70vh;
  /* background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)); */
  /* background: url(@/assets) top center; */
  background-position: center;
  background-size: cover;
  position: relative;
}

#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
#hero h2 {
  color: #eee;
  margin: 10px 0 0 0;
  font-size: 24px;
}
#hero .btn-get-started:hover {
  background: #5fcf80;
  border: 2px solid #5fcf80;
}
#hero .btn-get-started {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 35px;
  border-radius: 50px;
  transition: 0.5s;
  margin-top: 30px;
  border: 2px solid #fff;
  color: #fff;
}

#hero .container {
  padding-top: 72px;
}
</style>