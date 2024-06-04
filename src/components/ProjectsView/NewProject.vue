<script setup>
import { ref, inject } from 'vue'
import { projectsStore } from "../../stores/projects";

defineProps({
    projectName: String,
})

const { addProject } = projectsStore;

const session = inject('session')

let errorMessage = ref('')
let successMessage = ref('')

async function createProject() {
    addProject({ name: projectName.value, userId: session.value.user.id })
}
</script>

<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-6">Create a new project</h1>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <p v-if="errorMessage" class="text-red-500">{{errorMessage}}</p>
            <p v-if="successMessage" class="text-green-500">{{successMessage}}</p>
            <form :on:submit.prevent=createProject class="space-y-4">
                <div class="flex flex-col">
                    <label for="projectName" class="mb-2 font-semibold">Project name:</label>
                    <input type="text" id="projectName" :bind:value=projectName required class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Create project</button>
            </form>
        </div>
    </div>
</template>