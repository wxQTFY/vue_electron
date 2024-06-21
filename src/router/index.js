import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'


const routes = [
  {
     path: '/', 
     component: Home
  },
  { 
    path: '/home',
    name:'home',
    component: Home
  },
  { 
    path: '/imageGallery',
    name:'imageGallery',
    component:() => import('@/components/ImageGallery.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router