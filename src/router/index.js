import { createRouter, createWebHistory } from 'vue-router'
import main from "@/pages/main";
import Nastya from "@/pages/Nastya";
import Maks from "@/pages/Maks";

const routes = [
  {
    path: '/',
    component: main
  },
  {
    path: '/Nastya',
    component: Nastya
  },
  {
    path: '/Maks',
    component: Maks
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
