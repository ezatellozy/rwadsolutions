<template>
  <div class="clients" id="clients">
    <h3 class="title">
      عملاء نفتخر بهم
    </h3>
    <div class="container">
      <div class="row">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-2 p-5 p-sm-4"
          v-for="n in 12"
          :key="n"
        >
          <img src="@/assets/logo.png" alt="client-logo" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.clients {
  padding: 100px 0;
}
</style>
