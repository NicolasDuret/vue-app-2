import Vue from 'vue'
import VueRouter from 'vue-router'
import Liste from '../views/Liste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Liste',
    component: Liste
  }
]

const router = new VueRouter({
  routes
})

export default router
