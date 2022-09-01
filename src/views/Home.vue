<template>
  <Loading v-if="loading" />
  <div class="home-wrapper" v-else>
    <Intro v-if="header" :items="header" />
    <AboutUs v-if="aboutUs" :items="aboutUs" />
    <Services v-if="services" :items="services" />
    <div v-if="features">
      <WhyUs v-for="feature in features" :key="feature.id" :items="feature" />
    </div>
    <Clients v-if="clients" :items="clients" />
    <Blogs v-if="blogs" :items="blogs" />
    <Testimonials v-if="testimonials" :items="testimonials" />
    <ContactUs />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import AboutUs from '../components/AboutUs.vue'
import Services from '@/components/Services.vue'
import WhyUs from '@/components/WhyUs.vue'
import Clients from '@/components/Clients.vue'
import Blogs from '@/components/Blogs.vue'
import Testimonials from '@/components/Testimonials.vue'
import ContactUs from '@/components/ContactUs.vue'
import Loading from '@/components/Loading.vue'
export default {
  name: 'Home',
  components: {
    Intro,
    AboutUs,
    Services,
    WhyUs,
    Clients,
    Blogs,
    Testimonials,
    ContactUs,
    Loading,
  },
  data() {
    return {
      loading: false,
      lists: null,
      header: null,
      aboutUs: null,
      services: null,
      features: null,
      clients: null,
      blogs: null,
      testimonials: null,
      general: null,
    }
  },
  mounted() {
    this.getLists()
  },
  methods: {
    getLists() {
      this.loading = true
      this.axios.get('lists').then((data) => {
        this.header = data.data.data.header
        this.aboutUs = data.data.data.aboutUs
        this.services = data.data.data.services
        this.features = data.data.data.features
        this.clients = data.data.data.clients
        this.blogs = data.data.data.blogs
        this.general = data.data.data.general
        this.testimonials = data.data.data.testimonials
        this.loading = false
      })
    },
  },
}
</script>
