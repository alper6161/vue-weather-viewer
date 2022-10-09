import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/mainPage.vue";
import AboutPage from "@/views/about.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainPage },
    { path: '/about', component: AboutPage },
  ]
})

export default router
