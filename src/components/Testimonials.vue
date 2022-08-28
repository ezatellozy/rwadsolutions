<template>
  <div class="testimonials">
    <h3 class="title">أراء العملاء</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 mb-3 mb-md-0 col-md-4" v-for="n in 3" :key="n">
          <TestimonialsCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialsCard from './TestimonialsCard.vue'
export default { components: { TestimonialsCard } }
</script>

<style lang="scss">
.testimonials {
  padding: 100px 0;
}
</style>
