<template>
  <div class="blogs" id="blogs">
    <h3 class="title">أحدث الاخبار</h3>
    <div class="container">
      <div class="row">
        <div class="mb-5 mb-md-0 col-md-6 col-lg-4" v-for="n in 3" :key="n">
          <BlogCard />
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
export default { components: { BlogCard } }
</script>

<style lang="scss">
.blogs {
  background: fixed url('@/assets/gray-bg.jpg');
  background-position: center center;
  background-size: cover;
  padding: 100px 0;
}
</style>
