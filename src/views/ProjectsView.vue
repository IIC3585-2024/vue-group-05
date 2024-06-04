<script setup>
import { onMounted, inject } from 'vue'
import NewProject from '../components/ProjectsView/NewProject.vue'
import ProjectList from '../components//ProjectsView/ProjectList.vue'
import { projectsStore } from '../stores/projects'
import { tasksStore } from '../stores/tasks'

const session = inject('session')

const { fetchProjects } = projectsStore
const { fetchTasks } = tasksStore

onMounted(() => {
  if (!session.value) {
    return
  }
  fetchProjects(session.value.user.id)
  fetchTasks(session.value.user.id)
})

</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NewProject/>
    <ProjectList />
  </div>
</template>