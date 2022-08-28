<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" class="img-fluid" alt="rwad-logo" />
      </a>
      <button
        class="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav p-0 me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">
              الرئيسية
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#about-us" class="nav-link">
              من نحن
            </a>
          </li>
          <li class="nav-item">
            <a href="#our-services" class="nav-link">
              خدماتنا
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#clients">
              عملائنا
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blogs">
              المدونه
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact-us">
              تواصل معنا
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navbar {
  background: #1b6096;
  z-index: 10;
  .navbar-brand {
    width: 80px;
    img {
      filter: brightness(0) invert(1);
    }
  }
  .nav-item {
    .nav-link {
      color: #fff !important;
      font-weight: 400;
      position: relative;
      padding: 20px;
      position: relative;
      width: fit-content;
      &::before {
        content: '';
        width: 0;
        height: 2px;
        background: #fff;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        transition: 0.3s;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
      &.router-link-active {
        &::before {
          width: 100%;
          color: #fff !important;
        }
      }
    }
  }
}
.navbar-toggler {
  box-shadow: none !important;
}
</style>
