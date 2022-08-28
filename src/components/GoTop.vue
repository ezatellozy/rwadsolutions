<template>
  <div v-if="gotop" class="gotop">
    <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gotop: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 400) {
        this.gotop = true
        return
      }
      this.gotop = false
      return
    },
  },
}
</script>

<style lang="scss">
.gotop {
  position: fixed;
  bottom: 50px;
  left: 50px;
  background: #1b6096;
  a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  padding: 10px 15px;
  animation: bunceing 3s linear infinite;
  border-radius: 5px;
}
@keyframes bunceing {
  0%,
  20%,
  40% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
