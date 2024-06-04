<script setup>
import { projectsStore } from '@/stores/projects';
import ProjectItem from './ProjectItem.vue'

const { projects } = projectsStore;

</script>

<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-6">Projects</h1>
	    <div class="bg-white p-6 rounded-lg shadow-md">
	    	<p v-if="projects.length == 0" class="text-gray-500">No projects found.</p>
	    	<div v-else class="mb-6">
	    		<ProjectItem 
				    v-for="project in projects" 
				    :key="project.id"
				    :projectName="project.name"
				    :projectId="project.id"
				/>
	    	</div>
	    </div>
    </div>
</template>
