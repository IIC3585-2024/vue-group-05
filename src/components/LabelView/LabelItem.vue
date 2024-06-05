<script setup>
import { labelsStore } from '../../stores/labels.ts';

defineProps({
  label: Object
})

const { labels } = labelsStore;

function deleteLabel(label) {
    labels.delete(label.id);
}

</script>

<template>
    <div class="bg-white p-6 rounded-lg shadow-md m-3">
        <div class="flex justify-between items-center">
            <div class="flex justify-between items-center">
                <div 
                    class="p-4 border border-gray-200 rounded-md hover:bg-gray-50 m-1" 
                    :style="{ backgroundColor: label.color }">
                    {{ label.name }}
                </div>
                <div class="relative">
                    <button
                    @click="deleteLabel"
                    class="block w-fit px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>