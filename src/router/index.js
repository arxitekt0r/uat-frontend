import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Drivers from '../views/Drivers.vue'
import Loads from '../views/Loads.vue'
import Sidebar from '../components/Sidebar.vue'
import { useUserStore } from '../stores/user'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Sidebar,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'drivers', component: Drivers },
      { path: 'loads', component: Loads }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
