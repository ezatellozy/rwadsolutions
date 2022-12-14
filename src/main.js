import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/style/main.scss'
import VueLazyLoad from 'vue3-lazyload'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.baseURL = `https://dashboard.rwadsolutions.com/api`


const app = createApp(App)
app.use(BootstrapVue3)
app.use(VueAxios, axios)
app.use(VueLazyLoad)
app.use(store)
app.use(router)
app.mount("#app");
