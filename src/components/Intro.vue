<template>
  <div class="intro">
    <section class="intro-content content">
      <div class="container" v-if="items">
        <div class="row align-items-center">
          <div class="info" :class="items.image ? 'col-lg-6' : 'col-lg-12'">
            <h1>{{ items.welcomeMsg }}</h1>
            <h2>{{ items.title }}</h2>
            <p>
              {{ items.description }}
            </p>
          </div>
          <div class="col-lg-6 image" v-if="items.image">
            <img
              v-if="items.image"
              v-lazy="items.image"
              class="img-fluid"
              alt="rwad-intro"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default { props: ['items'] }
</script>

<style lang="scss">
.intro {
  position: relative;
  height: 100vh;
  background-color: #1b6096;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    border-right: 100vw solid #fff;
    border-top: 200px solid transparent;
    width: 100%;
    z-index: 0;
  }
  .intro-content {
    padding-top: 80px;
    .info {
      text-align: center;
      color: #fff;
      padding: 30px;
      h1 {
        font-size: 24px;
        margin-bottom: 25px;
      }
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      p {
        line-height: 1.5;
        margin-bottom: 0;
      }
    }
    .image {
      padding: 30px;
      img {
        position: relative;
        z-index: 2;
      }
    }
    @media (min-width: 992px) {
      .info {
        text-align: start;
        h2 {
          font-size: 37px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
