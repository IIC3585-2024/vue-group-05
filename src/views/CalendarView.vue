<script setup lang="ts">
  import { onMounted, inject } from 'vue'
  import NewProject from '../components/ProjectsView/NewProject.vue'
  import Calendar from '../components/Calendar/Calendar.vue';
  import { tasksStore } from '../stores/tasks'
  import { holidaysStore } from '../stores/holidays'

  const session = inject('session')
  const { fetchTasks } = tasksStore
  const { fetchHolidays } = holidaysStore

  onMounted(() => {
  if (!session.value) {
    return
  }
  fetchTasks(session.value.user.id)
  fetchHolidays(2024)
  })

</script>

<template>
  <main>
    <div class="w-full">
      <div class='m-6'>
        <Calendar />
      </div>
    </div>
  </main>
</template>
