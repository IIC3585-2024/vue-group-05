<script setup>
import { inject } from 'vue';
import { RouterLink } from 'vue-router'

const session = inject('session')
</script>

<template>
    <main class="p-6 bg-gray-100 min-h-screen">
        <div class="flex flex-row items-center justify-center bg-gray-100 mt-20 flex-wrap md:flex-nowrap">
          <div class="text-center">
            <h1 class="text-7xl font-bold text-gray-900 mb-4 text-center">Taskify</h1>
            <p class="text-4xl text-gray-700 mb-4 text-center">
              Organize. Simplify. Achieve.
            </p>
          </div>
          <img src="/src/assets/hero.png" alt="Taskify" class="w-11/12 sm:w-3/4 md:w-1/2 lg:w-5/12 mb-4" />
        </div>
        <p v-if="!session"class="mt-20 text-lg text-gray-700 mb-6 text-center">
          <span>
            <RouterLink to="/login" class="text-blue-500 hover:underline">Log in</RouterLink> or <RouterLink to="/register" class="text-blue-500 hover:underline">Sign up</RouterLink> to get started.
          </span>
        </p>
    </main>
</template>