<template>
  <footer>
    <div class="container">
      <div class="">
        <div class="logo">
          <div class="img-container" v-if="general">
            <img
              v-if="general.logo"
              :src="general.logo"
              alt="rwad-logo"
              class="img-fluid"
            />
          </div>
          <p class="description" v-if="aboutUs">
            {{ aboutUs.description }}
          </p>
        </div>
        <div class="info" v-if="general">
          <div class="contact d-flex justify-content-center">
            <a
              :href="`mailto:${general.email}`"
              class="link ml-4"
              v-if="general.email"
            >
              <i class="fa-solid fa-envelope"></i>
              {{ general.email }}
            </a>
            <a :href="`tel:${general.phone}`" class="link" v-if="general.phone">
              <i class="fa-solid fa-phone-flip"></i>
              {{ general.phone }}
            </a>
          </div>
          <div>
            <ul class="list-unstyled p-0 d-flex social">
              <li v-if="general.facebook">
                <a :href="general.facebook" target="_blank">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li v-if="general.twitter">
                <a :href="general.twitter" target="_blank">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li v-if="general.instagram">
                <a :href="general.instagram" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p class="copyrights">
      كافة الحقوق محفوظة لشركه
      <a href="http://www.rwadsolutions.com" target="_blank">لحلول رواد</a>
      &copy; {{ Year }}
    </p>
  </footer>
</template>

<script>
export default {
  props: ['general', 'aboutUs'],
  computed: {
    Year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss">
footer {
  background: #282828;
  padding: 20px 0 0;
  .logo {
    padding: 30px;
    .img-container {
      width: 200px;
      margin: 0 auto 30px;
    }
    p.description {
      font-size: 14px;
      max-width: 750px;
      margin: 0 auto;
      font-weight: 600;
      color: #fff;
      text-align: center;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
  .info {
    .contact {
      a {
        color: #fff;
        font-size: 18px;
        margin-bottom: 10px;
        line-height: 30px;
        text-decoration: none;
        transition: 0.3s;
        &:first-child {
          margin-left: 20px;
        }
        &:hover {
          color: #f8ac19;
        }
      }
    }
  }
}
ul.social {
  justify-content: center;
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #fff;
    transition: 0.3s;
    text-decoration: none;

    i {
      font-size: 30px;
    }
    &:hover {
      color: #f8ac19;
    }
  }
}
p.copyrights {
  color: #fff;
  text-align: center;
  margin-bottom: 0;
  padding: 20px 0;
  position: relative;
  background: #202020;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f8ac19;
      text-decoration: underline;
    }
  }
}
</style>
