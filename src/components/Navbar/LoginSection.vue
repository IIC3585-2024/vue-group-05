<script setup>
import NavbarButton from './NavbarButton.vue'
import LogoutButton from './LogoutButton.vue'
import { toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

</script>

<template>
    <div class="flex space-x-5 text-black mr-5 my-3 items-center">
        <NavbarButton v-if="!session" route_name="/login" route_text="Login" />
        <NavbarButton v-if="!session" route_name="/register" route_text="Register" />
        <p v-if="session">{{ session.user.email }}</p>
        <LogoutButton v-if="session" route_name="/logout" route_text="Logout" />
    </div>
</template>