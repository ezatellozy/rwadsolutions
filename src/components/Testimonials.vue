<template>
  <div class="testimonials">
    <h3 class="title">أراء العملاء</h3>
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-sm-6 mb-3 mb-md-0 col-md-4"
          v-for="item in items"
          :key="item.id"
        >
          <TestimonialsCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialsCard from './TestimonialsCard.vue'
export default {
  props: ['items'],
  components: { TestimonialsCard },
}
</script>

<style lang="scss">
.testimonials {
  padding: 100px 0;
}
</style>
