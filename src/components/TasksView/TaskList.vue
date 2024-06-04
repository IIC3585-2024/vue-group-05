<script setup>
import { computed  } from 'vue'
import TaskItem from './TaskItem.vue'
import { tasksStore } from "../../stores/tasks";
import {
  calculateTotalTime,
  groupTasksByWeek,
  formatTotalTime,
} from "../../utils/functions";


const { tasks } = tasksStore
const tasksArray = computed(() => tasks.value || []);

</script>

<template>
	<p v-if="tasksArray.length == 0" >No tasks found.</p>
	<div v-for="(_tasks, week) in groupTasksByWeek(tasksArray)" class="space-y-4">
		<div class="flex flex-row items-center justify-between p-4 mb-2 rounded-lg">
			<h2>{{week}}</h2>
			<p>Total time: {{formatTotalTime(calculateTotalTime(_tasks))}}</p>
		</div>
		<TaskItem v-for="task in _tasks" :key="task.id" :task="task" />
	</div>
</template>