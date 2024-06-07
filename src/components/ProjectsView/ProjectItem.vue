<script setup>
import { projectsStore } from "../../stores/projects";
defineProps({
  projectName: String,
  projectId: Number,
});

const { deleteProject } = projectsStore;

function projectDelete(key) {
  deleteProject(key);
}
</script>

<template>
  <div class="flex justify-between items-center mb-4">
    <div
      class="p-4 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
      :onClick="
        () => {
          $router.push(`/projects/${projectId}`);
        }
      "
    >
      {{ projectName }}
    </div>
    <button
      :on:click="() => projectDelete(projectId)"
      class="px-4 py-2 bg-red-500 text-white rounded-lg"
    >
      Delete
    </button>
  </div>
</template>
