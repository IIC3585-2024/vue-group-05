<script setup>
import { toRefs, ref, watch } from 'vue';
import { projectsStore } from "../../stores/projects";

const props = defineProps(['project']);
const { project } = toRefs(props);
const { projects } = projectsStore;
const emit = defineEmits(['update:project']);

const selectedProject = ref(project.value);

watch(selectedProject, (newValue) => {
    emit('update:project', newValue);
});
</script>

<template>
    <select v-model="selectedProject" class="p-2 border rounded-lg">
        <option :value="null" disabled selected>Select a project</option>
        <option v-for="project in projects" :key="project.id" :value="project.id">
            {{ project.name }}
        </option>
    </select>
</template>
