<template>
  <section class="services" id="our-services">
    <div class="container">
      <h3 class="title">خدماتنا</h3>
      <div class="row">
        <div class="col-md-4">
          <ServiceCard />
        </div>
        <div class="col-md-4">
          <ServiceCard />
        </div>
        <div class="col-md-4">
          <ServiceCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard.vue'
export default { components: { ServiceCard } }
</script>

<style lang="scss">
.services {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
