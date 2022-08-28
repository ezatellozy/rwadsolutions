import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"
import Blogs from "@/views/Blogs.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/blogs/:id?",
    name: "blogs",
    component: Blogs,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
