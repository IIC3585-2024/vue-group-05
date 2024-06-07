import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TaskView from './views/TaskView.vue'
import ProjectsView from './views/projects/ProjectsView.vue'
import ProjectDetailView from './views/projects/ProjectDetailView.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'
import CalendarView from './views/CalendarView.vue'
import LabelsView from './views/LabelsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tasks', component: TaskView },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/:id', component: ProjectDetailView },
  { path: '/labels', component: LabelsView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/calendar', component: CalendarView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
