<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2>About</h2>
        <p>About Us</p>
      </div>

      <div class="row">
        <div
          class="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img src="assets/img/about.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h3>
          <p class="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-check-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-check-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-check-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate
          </p>
          <a href="about.html" class="learn-more-btn">Learn More</a>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<script>
export default {};
</script>

<style>
#about .section-title {
  padding-bottom: 40px;
}

#about .section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: "Poppins", sans-serif;
}

#about .section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #9ae1af;
  margin: 4px 10px;
}

#about .section-title p {
  margin: 0;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #37423b;
}

.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .bi-check-circle {
  font-size: 25px;
  padding-right: 4px;
  color: #5fcf80;
}

.about p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.about .content .learn-more-btn {
  background: #5fcf80;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px 9px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}

.about .content .learn-more-btn:hover {
  background: #3ac162;
  color: #fff;
}

.font-italic {
  font-style: italic !important;
}
</style>