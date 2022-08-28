<template>
  <div class="side-card">
    <div class="blog">
      <div class="card flex-row">
        <img
          src="@/assets/article.webp"
          class="card-img-top"
          alt="article-image"
        />
        <div class="card-body">
          <p class="card-title">
            Card title Card title Card title Card title Card title Card title
          </p>
          <router-link to="/blogs/12" class="see-more-btn">
            Go somewhere
            <i class="fa-solid fa-arrow-left-long"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.side-card {
  margin-bottom: 10px;
  .card-img-top {
    width: 80px;
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
      // margin-bottom: 10px;
    }
  }
  .see-more-btn {
    font-size: 14px;
  }
}
</style>
