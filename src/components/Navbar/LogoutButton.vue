<script setup>
import { supabase } from '../../supabaseClient'

defineProps({
    route_name: String,
    route_text: String,
})

function handleLogout() {
    console.log('Logging out')
    supabase.auth.signOut();
}
</script>

<template>
    <div class="flex">
        <button :on:click=handleLogout class="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700">Logout</button>
    </div>
</template>