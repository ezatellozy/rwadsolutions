<template>
  <section
    class="content why-us d-flex justify-content-between flex-wrap container-fluid"
  >
    <div class="image">
      <img src="@/assets/whyus.webp" alt="why-us-image" class="w-100 h-100" />
    </div>
    <div class="info">
      <h2 class="title">ليه تختار رواد</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        officiis rem dolor quisquam veritatis eos quam, cupiditate unde
        voluptate aspernatur, quia id? Dicta et laudantium, officia ea
        dignissimos minima blanditiis.
      </p>
      <div class="featuers">
        <div class="row">
          <div class="col-md-6 mt-5" v-for="n in 3" :key="n">
            <div class="row">
              <div class="col-3">
                <img
                  src="@/assets/settings.png"
                  alt="icon features"
                  class="img-fluid"
                />
              </div>
              <div class="col-9">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.why-us {
  background: fixed url('@/assets/gray-bg.jpg');
  background-size: cover;
  background-position: center center;
  .image {
    text-align: center;

    width: 100%;
  }
  .info {
    padding: 100px 30px;
    width: 100%;
    p {
      line-height: 1.7;
      margin-bottom: 0;
    }
  }
  @media (min-width: 768px) {
    .image {
      width: 45%;
    }
    .info {
      flex: 1;
    }
  }
}
</style>
