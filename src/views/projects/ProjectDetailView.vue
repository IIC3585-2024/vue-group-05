<script setup>
import TaskList from "../../components/TasksView/TaskList.vue";
</script>
<template>
  <div class="flex flex-col items-center p-8">
    <h1 class="text-4xl font-bold mb-6">
      Project:
      <!-- TODO: insert project NAME -->
    </h1>
    <h2>
      Total Cost:
      <!-- TODO: insert project cost -->
    </h2>
    <!-- TODO: pass props to tasklist -->
    <TaskList />
  </div>
</template>
