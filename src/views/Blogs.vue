<template>
  <div class="blogs-page">
    <div class="container">
      <div class="row">
        <div class="d-none d-xl-block col-xl-3 p-0 side">
          <div class="section top-rated">
            <h2 class="title">top rated</h2>
            <div class="content">
              <BlogCardSide v-for="n in 5" :key="n" />
            </div>
          </div>
          <div class="section most-viewd">
            <h2 class="title">most viewd</h2>
            <div class="content">
              <BlogCardSide v-for="n in 5" :key="n" />
            </div>
          </div>
        </div>
        <div class="col-xl-9 blogs-content">
          <div class="row" v-if="!$route.params.id">
            <div class="col-md-6 mb-4" v-for="n in 6" :key="n">
              <BlogCard />
            </div>
          </div>
          <div v-else class="px-3">
            <div class="img-container text-center">
              <img
                src="@/assets/article.webp"
                alt="article-image"
                class="img-fluid"
              />
            </div>
            <div class="content">
              <h2 class="title text-end mt-4 mb-3 fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus est aliquam, voluptates doloremque, perferendis
              </h2>
              <ul class="publish-info list-unstyled p-0 d-flex flex-wrap">
                <li>
                  <a class="publisher" href="#">
                    <i class="fa-solid fa-user"></i>
                    ahmed mohamed
                  </a>
                </li>
                <li>
                  <p class="date">
                    <i class="fa-solid fa-calendar"></i>
                    22 اغسطس 2021
                  </p>
                </li>
                <li>
                  <p class="comments">
                    <i class="fa-solid fa-comment"></i>
                    0
                  </p>
                </li>
                <li>
                  <p class="views">
                    <i class="fa-solid fa-eye"></i>
                    0
                  </p>
                </li>
              </ul>
              <div class="blog-info">
                <h2>fsdfsd</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  quia odit error et culpa in quos sint rerum? Eum assumenda qui
                  molestiae voluptas, soluta vitae distinctio. Quam libero natus
                </p>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>
                <ol>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'
import BlogCardSide from '@/components/BlogCardSide.vue'
export default {
  name: ['blogs'],
  components: { BlogCard, BlogCardSide },
}
</script>

<style lang="scss">
.blogs-page {
  padding-top: 50px;
  .publish-info {
    li {
      margin-left: 10px;
      p {
        color: #868e96;
      }
      a {
        &.publisher {
          color: #000 !important;
          text-decoration: none;
        }
      }
    }
  }
  .blogs-content {
    padding: 0 30px 0 0;
    .content .blog-info {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        position: relative;
        margin-bottom: 20px;
        color: #1b6096;
      }
      p {
        line-height: 1.7;
        font-size: 18px;
        font-weight: 600;
      }
      ul,
      ol {
        li {
          text-decoration: none;
        }
      }
    }
  }
  .side {
    .section {
      border-radius: 10px;
      // box-shadow: 0 0 4px 0;
      min-height: 80px;
      border: 1px solid #f8ac19;
      border-top: 4px solid #f8ac19;
      margin-bottom: 30px;
      padding: 10px;
      h2 {
        font-size: 24px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
