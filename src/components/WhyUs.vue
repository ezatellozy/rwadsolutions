<template>
  <section
    class="content why-us d-flex justify-content-between flex-wrap container-fluid"
    v-if="items"
  >
    <div class="image">
      <img
        v-if="items.image"
        :src="items.image"
        alt="why-us-image"
        class="w-100 h-100"
      />
    </div>
    <div class="info">
      <h2 class="title">{{ items.title }}</h2>
      <p>
        {{ items.description }}
      </p>
      <div class="featuers">
        <div class="row">
          <div
            class="col-md-6 mt-5"
            v-for="feature in items.featureList"
            :key="feature.id"
          >
            <div class="row">
              <div class="col-3">
                <i :class="feature.icon"></i>
              </div>
              <div class="col-9">
                <p>
                  {{ feature.title }}
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
export default {
  props: ['items'],
}
</script>

<style lang="scss" scoped>
.content {
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
}
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
