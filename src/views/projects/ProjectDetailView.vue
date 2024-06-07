<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projectsStore } from "../../stores/projects";
import { tasksStore } from "@/stores/tasks";
import { inject, onMounted } from "vue";
import TaskList from "../../components/TasksView/TaskList.vue";

const route = useRoute();
const projectId = route.params.id;

const { projects, fetchProjects } = projectsStore;
const { tasks, fetchTasks } = tasksStore;
const session = inject('session')

onMounted(() => {
  if (!session.value) {
    return
  }
  fetchProjects(session.value.user.id)
  fetchTasks(session.value.user.id)
})



const project = computed(() => {
  return projects.value.find((project) => project.id.toString() == projectId);
});


const projectTasks = computed(() => {
  return tasks.value.filter((task) => task.projectId.toString() == projectId);
});

console.log('projectTasks', projectTasks.value)
const totalCost = computed(() => {
  return projectTasks.value.reduce((acc, task) => acc + task.cost, 0);
});
</script>

<template>
  <div class="flex flex-col items-center p-8">
    <h1 class="text-4xl font-bold mb-6">
      Project: {{ project?.name || "Loading..." }}
    </h1>
    <h2>Total Cost: {{ totalCost }}</h2>
    <TaskList :tasks="projectTasks" />
  </div>
</template>
