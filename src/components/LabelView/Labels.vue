<script setup lang="ts">
  import { ref, inject, computed } from 'vue';
  const props = defineProps({
    labels: [],
    Selectedlabels: [],
  });


  let openLabels = ref(false)
  let buttonRef: HTMLButtonElement;

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (!node.contains(event.target) && event.target !== buttonRef) {
        openLabels.value = false;
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }
</script>

<template>
    <div>
        <button
          ref="buttonRef"
          class="p-2 border rounded-lg"
          @click="openLabels = !openLabels"
        >
          Labels
        </button>
        <div v-if="openLabels">
            <div v-if="props.labels.length === 0" class="absolute bg-white border rounded-lg p-4"> <!-- TODO clickoutside -->
                <p class="text-gray-500">No labels available</p>
            </div>
            <div v-else>
                <div class="absolute bg-white border rounded-lg p-4">
                    <div class="flex flex-col">
                        <div v-for="label in props.labels" :key="label.id" class='flex justify-items-center text-center'> <!-- TODO clickoutside -->
                            <label class="mr-2 mb-2 flex">
                                <input
                                type="checkbox"
                                name="labels"
                                :value="label.id"
                                class="mr-2"
                                v-model="props.Selectedlabels"
                                />
                                {{label.name}}
                            </label>
                            <div class='mt-1.5 h-3 w-3 rounded-full' :style="'background-color: ' + label.color"></div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>