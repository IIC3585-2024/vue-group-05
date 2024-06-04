<script setup>
import { onMounted, inject } from 'vue'
import TaskList from '../components/TasksView/TaskList.vue'
import NewTask from '../components/TasksView/NewTask.vue'
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
  <main class="p-6 bg-gray-100 min-h-screen">
    <div class="container mx-auto">
      <NewTask/>
      <TaskList />
    </div>
  </main>
</template>
