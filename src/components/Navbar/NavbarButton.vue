<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  route_name: String,
  route_text: String,
})
</script>

<template>
  <div class="flex">
    <RouterLink :to="route_name" class="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
      {{ route_text }}
    </RouterLink>
  </div>
</template>
