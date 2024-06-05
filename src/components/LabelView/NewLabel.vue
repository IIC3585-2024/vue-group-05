<script setup>
import { ref, inject } from 'vue';
import { labelsStore } from '../../stores/labels';

const color = ref('#2ff58b');
const name = ref('');

const session = inject('session');
const userId = session.value.user.id;

const { addLabel } = labelsStore;

function createLabel() {
  addLabel({ name: name.value, color: color.value, userId });
}

</script>

<template>
  <div class='p-8 bg-gray-100'>
    <h1 class="text-4xl font-bold mb-6">Create and customize your labels</h1>
    <div class="p-6 bg-white rounded-lg shadow-md">
      <div class="flex items-center space-x-3">
        <label class="mr-6 flex items-center text-lg font-semibold">
          <input
            type="text"
            v-model="name"
            maxlength="30"
            placeholder="Add your new label here"
            class="flex-1 p-2 border rounded-lg"
          />
        </label>
        <label class="flex items-center text-lg font-semibold">
          <input 
            id="hs-color-input"
            type="color"
            v-model="color"
            class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            title="Choose your color"
          />
        </label>
        <button
          @click="createLabel"
          class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 active:transform active:translate-y-1"
        >Create label</button>
      </div>
    </div>
  </div>
</template>
