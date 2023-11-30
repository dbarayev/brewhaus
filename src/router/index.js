import { createRouter, createWebHistory } from 'vue-router'
import BeerCards from '../components/BeerCards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BeerCards
    },
    {
      path: '/details/:id',
      //Lazy load view
      component: ()=>import('@/views/BeerCardDetailsView.vue')
    }
  ]
})

export default router