<template>
  <div class="blog" v-if="item">
    <div class="card">
      <img
        v-if="item.image"
        v-lazy="item.image"
        class="card-img-top"
        alt="article-image"
      />
      <div class="card-body">
        <h3 class="card-title">{{ item.title }}</h3>
        <div class="card-text" v-html="item.description"></div>
        <router-link :to="`/blogs/${item.id}`" class="see-more-btn">
          المزيد
          <i class="fa-solid fa-arrow-left-long"></i>
        </router-link>
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
.blog {
  .card > img {
    min-height: 300px;
    max-height: 300px;
    object-fit: cover;
  }
  .card-title {
    color: #1b6096;
    margin-bottom: 15px;
  }
  .card-text {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin-bottom: 30px;
  }
  .see-more-btn {
    text-decoration: none;
    color: #1b6096;
    font-size: 16px;
    transition: 0.3s;
    display: block;
    text-align: end;
    &:hover {
      text-decoration: underline;
      color: #f8ac19;
    }
  }
}
</style>
