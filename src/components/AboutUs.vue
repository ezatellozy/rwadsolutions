<template>
  <section class="content about-us" id="about-us">
    <div class="container" v-if="items">
      <div class="row align-items-center">
        <div class="col-lg-6 image">
          <img
            v-if="items.image"
            :src="items.image"
            class="img-fluid"
            alt="about-us"
          />
        </div>
        <div class="col-lg-6 info">
          <h2 class="title">{{ items.title }}</h2>
          <p>
            {{ items.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['items'],
}
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
