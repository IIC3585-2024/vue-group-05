import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TaskView from './views/TaskView.vue'
import ProjectsView from './views/ProjectsView.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'
// import LabelsView from './views/LabelsView.vue'
// import CalendarView from './views/CalendarView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tasks', component: TaskView },
  { path: '/projects', component: ProjectsView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  // { path: '/labels', component: LabelsView}
  // { path: '/calendar', component: CalendarView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
