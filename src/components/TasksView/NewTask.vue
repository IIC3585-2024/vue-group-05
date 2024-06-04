<script setup>
import { ref, inject } from 'vue';
import { Icon } from '@iconify/vue';
import { format } from "date-fns";
import { tasksStore } from '../../stores/tasks';
import ProjectsSelection from '../ProjectsView/ProjectsSelection.vue';

const session = inject('session')
const { addTask } = tasksStore;

let name = ref('');
let project = ref(null);
// let labels = ref([]);
let startTime = ref(null);
let stopTime = ref(null);
let startDate = new Date();
let stopDate = new Date();
let running = ref(false);
let elapsedTime = ref(0);
let interval;
let onlyTime = ref(true);

function clear() {
    name.value = "";
    project.value = null;
    // labels.value = [];
    startTime.value = null;
    stopTime.value = null;
    startDate = new Date();
    stopDate = new Date();
    running.value = false;
    elapsedTime.value = 0;
    clearInterval(interval);
}

function handleClick() {
    if (onlyTime.value) {
		if (!running.value) {
			startTime.value = new Date();
			elapsedTime.value = 0;
			running.value = true;
			interval = setInterval(() => {
				elapsedTime.value = new Date().getTime() - startTime.value.getTime();
			}, 1000);
		} else {
			stopTime.value = new Date();
			running.value = false;
			createNewTask();
		}
	} else {
      createNewTask();
    }
}

function createNewTask() {
	console.log(startTime.value)
	const newTask = {
		name: name.value,
		userId: session.value.user.id,
		projectId: project?.id,
		startTime: startTime.value,
		stopTime: stopTime.value,
		startDate: format(startDate, "yyyy-MM-dd"),
		stopDate: format(stopDate, "yyyy-MM-dd"),
	};
	addTask(newTask);
	clear();
}
</script>

<template>
    <div class="p-6 bg-white rounded-lg shadow-md">
	    <div class="flex items-center space-x-2 mb-4">
	    	<input
	    		type="text"
	    		v-model="name"
	    		placeholder="What are you working on?"
	    		class="flex-1 p-2 border rounded-lg"
	    	/>
			<ProjectsSelection v-model:project="project"/>

	    	<div v-if="running & onlyTime">
	    		{{ new Date(elapsedTime).toISOString().slice(11, 19) }}
	    	</div>
            <div v-else-if="!running & onlyTime">
	    		00:00:00
	    	</div>

			<div v-else-if="!onlyTime" class="flex items-center space-x-1">
    	    	<input
    	    		type="time"
    	    		v-model=startTime
    	    		class="p-2 border rounded-lg"
    	    	/>
    	    	<span>-</span>

    	    	<input
    	    		type="time"
    	    		v-model=stopTime
    	    		class="p-2 border rounded-lg"
    	    	/>

    	    	<input
    	    		type="date"
    	    		v-model=startDate
    	    		class="p-2 border rounded-lg"
					:max="format(new Date(), 'yyyy-MM-dd')"
    	    	/>
    	    	<input
    	    		type="date"
    	    		v-model=stopDate
    	    		class="p-2 border rounded-lg"
    	    		:max="format(new Date(), 'yyyy-MM-dd')"
    	    	/>
    	  	</div>

            <button
				v-if="running"
	    		v-on:click="handleClick"
	    		class="px-4 py-2 bg-red-500 text-white rounded-lg"
	    	>
				<p v-if="onlyTime">Stop</p>
				<p v-else>Save</p>
	    	</button>
			<button
				v-else
	    		v-on:click="handleClick"
	    		class="px-4 py-2 bg-green-500 text-white rounded-lg"
	    	>
                <p v-if="onlyTime">Start</p>
				<p v-else>Save</p>
	    	</button>
			<button @click="() => {onlyTime = !onlyTime}" class="block w-fit px-4 py-2 hover:bg-gray-200 hover:rounded-lg">
      			<Icon v-if="onlyTime"
      				icon="carbon:calendar"
      				class="w-6 h-6"
      				:on:click="() => (onlyTime = !onlyTime)"
      			/>
				<Icon v-if="!onlyTime"
      				icon="carbon:time"
      				class="w-6 h-6"
      				:on:click="() => (onlyTime = !onlyTime)"
      			/>
    		</button>
	    </div>
    </div>
</template>
