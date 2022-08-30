<template>
  <div class="clients" id="clients" v-if="items">
    <h3 class="title">
      عملاء نفتخر بهم
    </h3>
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2 p-5 p-sm-4"
          v-for="item in items"
          :key="item.id"
        >
          <img
            v-if="item.image"
            :src="item.image"
            alt="client-logo"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style lang="scss">
.clients {
  padding: 100px 0;
}
</style>
