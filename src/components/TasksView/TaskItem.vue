<script setup>
import { ref } from 'vue';
import { tasksStore } from '../../stores/tasks.ts'
import { calculateTotalTime, formatTotalTime } from "../../utils/functions.ts";

defineProps({
	task: Object,
})

const { deleteTask } = tasksStore;

function taskDelete(taskId) {
	deleteTask(taskId);
}

let possibleProjects = ref([]);

</script>

<template>
    <div class="p-6 bg-white rounded-lg shadow-md">
	  <div class="flex items-center space-x-4 mb-4">
	    <p class="flex-1 p-2">
	      {{task.name}}
	    </p>
	    <Projects :projects=possibleProjects />

	    <!-- <Labels {possibleLabels} bind:labels /> -->

	    <div>
	      <span>
	        {{task.startTime}}
	      </span>
	      -
	      <span>
	        {{task.stopTime}}
	      </span>
	    </div>

	    <div class="border-r border-gray-300 h-6 border-1"></div>

	    <input
	      type="date"
	      v-model=task.startDate
	      class="p-2 border rounded-lg"
	      disabled
	    />
	    <input
	      type="date"
	      v-model=task.stopDate
	      class="p-2 border rounded-lg"
	      disabled
	    />

	    <div class="flex items-center space-x-2">
	      <span class="text-xl font-bold">
	        {{formatTotalTime(calculateTotalTime([task]))}}
	      </span>
	    </div>
	    <div class="relative">
	      <button
	        @click="() => taskDelete(task.id)"
	        class="block w-fit px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-200"
	      >
		  	Delete
	      </button>
	    </div>
	  </div>
	</div>
</template>