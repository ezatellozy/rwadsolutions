<template>
  <div class="side-card">
    <div class="blog">
      <div class="card flex-row">
        <img
          v-if="item.image"
          v-lazy="item.image"
          class="card-img-top"
          alt="article-image"
        />
        <div class="card-body">
          <p class="card-title">
            {{ item.title }}
          </p>
          <router-link :to="`/blogs/${item.id}`" class="see-more-btn">
            المزيد
            <i class="fa-solid fa-arrow-left-long"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss">
.side-card {
  margin-bottom: 10px;
  .card-img-top {
    width: 80px;
    min-height: unset !important;
  }
  .card-body {
    padding: 10px;
    p.card-title {
      font-size: 18px !important;
      margin-bottom: 5px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .see-more-btn {
    font-size: 14px;
  }
}
</style>
