<template>
  <section class="content about-us" id="about-us">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 image">
          <img
            src="@/assets/header-bulb-table.png"
            class="img-fluid"
            alt="about-us"
          />
        </div>
        <div class="col-lg-6 info">
          <h2 class="title">من هو الرائد</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            accusamus nam architecto placeat qui cumque tenetur sed non animi
            consequuntur fugiat adipisci, cupiditate incidunt voluptates dicta!
            Accusamus provident tenetur quae.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.about-us {
  padding-top: 100px;
  //   background: fixed url('@/assets/gray-bg.jpg');
  .info {
    padding: 30px;
    h2 {
      letter-spacing: 1.2px;
    }
    p {
      line-height: 1.7;
    }
  }
  .image {
    padding: 30px;
  }
}
</style>
