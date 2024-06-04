import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TaskView from './views/TaskView.vue'
import ProjectsView from './views/ProjectsView.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tasks', component: TaskView },
  { path: '/projects', component: ProjectsView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
