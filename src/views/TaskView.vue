<script setup>
import { onMounted, inject } from 'vue'
import TaskList from '../components/TasksView/TaskList.vue'
import NewTask from '../components/TasksView/NewTask.vue'
import { projectsStore } from '../stores/projects'
import { tasksStore } from '../stores/tasks'
import { labelsStore } from '../stores/labels'
import { tasksLabelsStores } from '../stores/tasksLabels'


const session = inject('session');

const { fetchProjects } = projectsStore
const { fetchTasks } = tasksStore
const { fetchLabels } = labelsStore
const { fetchAll } = tasksLabelsStores

onMounted(async() => {
  if (!session.value) {
    return;
  }
  let _tasks = await fetchTasks(session.value.user.id)
  await fetchProjects(session.value.user.id)
  await fetchLabels(session.value.user.id)
  await fetchAll(_tasks)
})

</script>

<template>
  <main class="p-6 bg-gray-100 min-h-screen">
    <div class="container mx-auto">
      <NewTask/>
      <TaskList :tasks="tasksStore.tasks"/>
    </div>
  </main>
</template>
