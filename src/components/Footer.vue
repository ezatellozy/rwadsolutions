<template>
  <footer>
    <div class="container">
      <div class="">
        <div class="logo">
          <div class="img-container">
            <img src="@/assets/logo.png" alt="rwad-logo" class="img-fluid" />
          </div>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            beatae placeat earum saepe molestias! Veniam nobis at obcaecati
            laborum doloribus explicabo quos impedit quasi adipisci, esse
            delectus expedita est facilis!
          </p>
        </div>
        <div class="info">
          <div class="contact d-flex justify-content-center">
            <a href="mailto:test@test.com" class="link ml-4">
              <i class="fa-solid fa-envelope"></i>
              test@test.com
            </a>
            <a href="tel:1010101010" class="link">
              <i class="fa-solid fa-phone-flip"></i>
              101010101010
            </a>
          </div>
          <div>
            <ul class="list-unstyled p-0 d-flex social">
              <li>
                <a href="" target="_blank">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="" target="_blank">
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
