<template>
  <div class="blogs" id="blogs" v-if="items">
    <h3 class="title">أحدث الاخبار</h3>
    <div class="container">
      <div class="row">
        <div
          class="mb-5 mb-lg-0 col-md-6 col-lg-4"
          v-for="n in items.length > 2 ? 3 : 1"
          :key="n"
        >
          <BlogCard :item="items.length > 2 ? items[n] : items[0]" />
        </div>
      </div>
      <div class="text-center mt-5">
        <router-link to="/blogs" class="btn btn-primary">المزيد</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue'
export default {
  components: { BlogCard },
  props: ['items'],
}
</script>

<style lang="scss">
.blogs {
  background: fixed url('@/assets/gray-bg.jpg');
  background-position: center center;
  background-size: cover;
  padding: 100px 0;
}
</style>
