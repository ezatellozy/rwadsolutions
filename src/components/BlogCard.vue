<template>
  <div class="blog">
    <div class="card">
      <img
        src="@/assets/article.webp"
        class="card-img-top"
        alt="article-image"
      />
      <div class="card-body">
        <h3 class="card-title">Card title</h3>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atque
          delectus. Error ipsam veniam quidem ad magnam voluptatum labore minus
          commodi dolorum, asperiores explicabo ex sint id provident officia
          obcaecati?
        </p>
        <router-link to="/blogs/12" class="see-more-btn">
          Go somewhere
          <i class="fa-solid fa-arrow-left-long"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.blog {
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
