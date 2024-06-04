<script setup>
import NavigationSection from './NavigationSection.vue'
import LoginSection from './LoginSection.vue'
import { toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

</script>


<template>
    <nav class="bg-white border-b border-gray-200 shadow-sm">
        <div class="flex flex-row justify-between ml-5">
            <NavigationSection />
            <LoginSection :session="session"/>
        </div>
    </nav>
</template>