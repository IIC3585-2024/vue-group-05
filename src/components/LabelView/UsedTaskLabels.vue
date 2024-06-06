<script setup>
import { computed } from 'vue';
import { labelsStore } from '../../stores/labels';

defineProps({
  task: Object,
  tasksLabels: Array
});

const { labels } = labelsStore;

const taskLabels = computed(() => tasksLabels.filter(tl => tl.taskId === task.id));

const usedLabels = computed(() => labels.filter(label => 
  taskLabels.find(tl => tl.labelId === label.id)
));
</script>

<template>
    <div class="flex flex-wrap">
      <div v-for="label in usedLabels" :key="label.id" class="relative group m-1">
        <span class="mt-1.5 inline-block w-4 h-4 rounded-full" :style="{ backgroundColor: label.color }"></span>
        <span class="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-gray-800 text-white text-xs px-3 py-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap max-w-xs overflow-hidden overflow-ellipsis">
          {{ label.name }}
        </span>
      </div>
    </div>
</template>
  
  