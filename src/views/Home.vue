<template>
  <Intro />
  <AboutUs />
  <Services />
  <WhyUs />
  <Clients />
  <Blogs />
  <Testimonials />
  <ContactUs />
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
  },
}
</script>
