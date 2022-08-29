<template>
  <div class="blogs-page">
    <div class="container">
      <div class="row">
        <div class="d-none d-xl-block col-xl-3 p-0 side">
          <div class="section top-rated">
            <h2 class="title">top rated</h2>
            <div class="content" v-for="blog in blogs" :key="blog.id">
              <BlogCardSide :item="blog" />
            </div>
          </div>
          <div class="section most-viewd">
            <h2 class="title">most viewd</h2>
            <div class="content" v-for="blog in blogs" :key="blog.id">
              <BlogCardSide :item="blog" />
            </div>
          </div>
        </div>
        <div class="col-xl-9 blogs-content">
          <div class="row" v-if="!$route.params.id">
            <div class="col-md-6 mb-4" v-for="blog in blogs" :key="blog.id">
              <BlogCard :item="blog" />
            </div>
            <div v-if="blogs">
              <paginate
                v-model="page"
                :page-count="pages"
                :page-range="2"
                :margin-pages="1"
                :click-handler="clickCallback"
                :prev-text="'السابق'"
                :next-text="'التالي'"
                :container-class="'pagination'"
                :page-class="'page-item'"
              ></paginate>
            </div>
          </div>
          <div v-else class="px-3">
            <div v-if="blog">
              <div class="img-container text-center">
                <img
                  v-if="blog.image"
                  :src="blog.image"
                  alt="article-image"
                  class="img-fluid"
                />
              </div>
              <div class="content">
                <h2 class="title text-end mt-4 mb-3 fs-5">
                  {{ blog.title }}
                </h2>
                <ul class="publish-info list-unstyled p-0 d-flex flex-wrap">
                  <li>
                    <a
                      class="publisher"
                      :href="`/blogs?publisher=${blog.publisher.id}&page=1`"
                    >
                      <i class="fa-solid fa-user"></i>
                      {{ blog.publisher.name }}
                    </a>
                  </li>
                  <li>
                    <p class="date">
                      <i class="fa-solid fa-calendar"></i>
                      {{ blog.date }}
                    </p>
                  </li>
                  <li>
                    <p class="comments">
                      <i class="fa-solid fa-comment"></i>
                      {{ blog.comments.length }}
                    </p>
                  </li>
                  <li>
                    <p class="views">
                      <i class="fa-solid fa-eye"></i>
                      0
                    </p>
                  </li>
                </ul>
                <div class="blog-info" v-html="blog.description"></div>

                <div class="comments">
                  <div class="comment">
                    <h2>التعليقات</h2>
                    <ul class="list-unstyled">
                      <li
                        v-for="comment in blog.comments"
                        :key="comment.id"
                        class="d-flex"
                      >
                        <div class="comment-image">
                          <img
                            alt=""
                            src="https://secure.gravatar.com/avatar/279e22ae88264ca29a99c4a0f20fe65a?s=75&amp;d=mm&amp;r=g"
                            class="avatar avatar-75 photo"
                            height="75"
                            width="75"
                          />
                        </div>
                        <div class="comment-text">
                          <h5 class="comment-name">
                            {{ comment.name }}
                          </h5>

                          <p class="text-holder">
                            {{ comment.comment }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="write-comment">
                    <h2>اكتب تعليقك</h2>
                    <form @submit.prevent="submit">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="name"
                              placeholder="الاسم"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              v-model="email"
                              placeholder="ادخل الايميل"
                              required
                            />
                          </div>
                        </div>

                        <div class="col-12 mt-3">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              rows="4"
                              v-model="comment"
                              placeholder="أكتب تعليقك هنا"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary">
                            <span>ارسال</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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
import { createToaster } from '@meforma/vue-toaster'
import Paginate from 'vuejs-paginate-next'

export default {
  name: ['blogs'],
  components: { BlogCard, BlogCardSide, Paginate },
  data() {
    return {
      blogs: null,
      blog: null,
      name: '',
      email: '',
      comment: '',
      currentPage: '',
      page: 1,
      pages: null,
    }
  },
  mounted() {
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page)
    }
    this.getBlogs()
    if (this.$route.params.id) {
      this.getBlogDetails()
    }
  },

  methods: {
    getBlogs() {
      if (this.$route.query.publisher) {
        this.axios
          .get(`blogs-user/${this.$route.query.publisher}?page=${this.page}`)
          .then((data) => {
            this.blogs = data.data.data
            this.pages = data.data.countOfPages
            return
          })
      }
      this.axios.get(`get-blogs?page=${this.page}`).then((data) => {
        this.blogs = data.data.data
        this.pages = data.data.countOfPages
      })
    },
    getBlogDetails() {
      this.axios.get(`blog-details/${this.$route.params.id}`).then((data) => {
        if (data.data.status == 0) {
          this.$router.push('/blogs')
          return
        }
        this.blog = data.data.data
      })
    },
    submit() {
      const frmData = new FormData()
      const toaster = createToaster({ position: 'bottom' })
      frmData.append('name', this.name)
      frmData.append('email', this.email)
      frmData.append('comment', this.comment)
      frmData.append('blog_id', this.$route.params.id)
      this.axios.post('send-comment', frmData).then((data) => {
        if (data.data.status == 1) {
          toaster.success(data.data.message)
          this.name = ''
          this.email = ''
          this.comment = ''
        } else {
          toaster.error(data.data.message)
        }
        // console.log(data)
      })
    },
    clickCallback(e) {
      if (this.$route.query.publisher) {
        this.$router.push(
          `/blogs?publisher=${this.$route.query.publisher}&page=${Number(e)} `,
        )
        setTimeout(() => {
          window.location.reload()
        }, 300)
        return
      }
      this.$router.push(`/blogs?page=${Number(e)} `)
      setTimeout(() => {
        window.location.reload()
      }, 300)
    },
  },

  watch: {
    $route() {
      if (this.$route.params.id) {
        this.getBlogDetails()
      }
    },
  },
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
    @media (min-width: 768px) {
      padding: 0 30px 0 0;
    }
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
  .comments {
    .comment {
      ul {
        margin-top: 30px;
        padding: 0;
        padding-bottom: 20px;
        margin-bottom: 50px;
        border-bottom: 1px solid #f5f5f5;
        li {
          padding-bottom: 10px;
          margin-bottom: 20px;
          &:not(:last-child) {
            border-bottom: 1px solid #f5f5f5;
          }
          .comment-text {
            margin-right: 30px;
          }
          .comment-image {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            overflow: hidden;
          }
          .comment-name {
            font-size: 15px;
            margin-bottom: 15px;
          }
          .text-holder {
            color: #868686;
          }
        }
      }
    }
  }

  .write-comment {
    > h2 {
      font-size: 18px;
      line-height: 1.5em;
      font-weight: 600;
      color: #0e0e0e;
    }
    max-width: 750px;
    margin-left: auto;
    padding-bottom: 50px;
    .form {
      background: #fff;
      padding: 30px;
      max-width: 750px;
      margin: auto;
    }
    .form-group {
      margin-bottom: 1rem;
      input {
      }
      input,
      textarea {
        border: none;
        box-shadow: none;
        border-bottom: 2px solid #1b6096;
        border-radius: 0;
        background: transparent;
        transition: 0.3s;
        padding: 10px 20px;
        margin-bottom: 24px;
        &:focus,
        &:hover {
          border-color: #f8ac19;
        }
      }
    }
    button.btn-primary {
      border-radius: 50px !important;
      margin-top: 25px;
      padding: 15px 45px !important;
      text-transform: uppercase !important;
      font-size: 14px !important;
      display: inline-block !important;
    }
  }
  .pagination {
    padding: 0;
    justify-content: center;
  }
}
</style>
