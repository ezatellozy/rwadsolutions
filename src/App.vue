<template>
  <Header :general="general" v-if="general" />

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer v-if="!loading" :general="general" :aboutUs="aboutUs" />
  <GoTop />
  <WhatsApp />
</template>
<script>
import GoTop from '@/components/GoTop.vue'
import Footer from '@/components/Footer.vue'
import Header from './components/Header.vue'
import WhatsApp from './components/WhatsApp.vue'

export default {
  components: { Footer, Header, GoTop, WhatsApp },
  data() {
    return {
      loading: false,
      general: null,
      aboutUs: null,
    }
  },
  mounted() {
    this.getLists()
  },
  methods: {
    getLists() {
      this.loading = true
      this.axios.get('lists').then((data) => {
        this.general = data.data.data.general
        this.aboutUs = data.data.data.aboutUs
        this.loading = false
      })
    },
  },
}
</script>

<style lang="scss">
h3.title {
  position: relative;
  margin-bottom: 50px;
  font-size: 35px;
  text-align: center;
  color: #1b6096;
  &::before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: #f8ac19;
  }
}
h2.title {
  position: relative;
  margin-bottom: 30px;
  color: #1b6096;
  &::before {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 0;
    width: 50px;
    height: 2px;
    background-color: #f8ac19;
  }
}

.btn-primary {
  background: #1b6096 !important;
  border: none !important;
  font-size: 16px;
  line-height: 1 !important;
  padding: 10px 30px !important;
  box-shadow: none !important;
}
.btn-primary:hover {
  background: #f8ac19 !important;
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(0);
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease;
}
.fade-in-enter-to,
.fade-in-leave {
  opacity: 1;
  transform: translateY(-30);
}
</style>
