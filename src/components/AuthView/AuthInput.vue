<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: String,
    labelName: String,
    labelType: String,
    labelId: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<template>
    <div class="flex flex-col">
        <label :for="labelId" class="mb-2 font-semibold">{{ labelName }}:</label>
        <input :type="labelType" :id="labelId" :value="modelValue" @input="updateValue" required class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
</template>
