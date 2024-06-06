<script setup>
import LabelItem from './LabelItem.vue';
import { labelsStore } from '../../stores/labels.ts';

const { labels } = labelsStore;

</script>

<template>
    <div class="p-8 bg-gray-100 min-h-screen">
        <h1 class="text-4xl font-bold mb-6">Labels</h1>
        <div v-if="labels.length === 0" class="bg-white p-6 rounded-lg shadow-md">
		    <p class="text-gray-500">No labels found.</p>
        </div>
        <div v-if="labels.length !== 0" class="flex flex-wrap mb-4 justify-center">
            <LabelItem v-for="label in labels" :key="label.id" :label="label" />
        </div>
    </div>
</template>