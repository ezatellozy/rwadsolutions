<template>
  <section class="services" id="our-services">
    <div class="container" v-if="items">
      <h3 class="title">خدماتنا</h3>
      <div class="row justify-content-center">
        <div class="col-md-4" v-for="service in items" :key="service">
          <ServiceCard :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard.vue'
export default {
  components: { ServiceCard },
  props: ['items'],
}
</script>

<style lang="scss">
.services {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
