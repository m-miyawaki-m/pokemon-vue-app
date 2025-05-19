import { createRouter, createWebHashHistory } from 'vue-router'
import BaseLayoutPage from '../views/BaseLayoutPage.vue'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import PageB from '../views/PageB.vue'
import PageWithTabs from '../views/PageWithTabs.vue'
import Random from '../views/Random.vue'
import SandBox from '../views/SandBox.vue'
import Search from '../views/Search.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/random', name: 'Random', component: Random },
  { path: '/search', name: 'Search', component: Search },
  { path: '/list', name: 'ListView', component: ListView },
  { path: '/SandBox', name: 'SandBox', component: SandBox },
  { path: '/BaseLayoutPage', name: 'BaseLayoutPage', component: BaseLayoutPage },
  { path: '/page-b', name: 'PageB', component: PageB },
  { path: '/tabs', name: 'PageWithTabs', component: PageWithTabs }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
