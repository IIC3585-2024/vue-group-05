<script setup>
import AuthInput from '../components/AuthView/AuthInput.vue'
import { supabase } from '../supabaseClient';
import { ref } from 'vue';

let email = ref('');
let password = ref('');
let errorMessage = ref('');

async function login() {
    const data = { email: email.value, password: password.value }
	const { user, error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		errorMessage.value = error.message;
	} else {
        window.location.href = '/';
    }
}

</script>

<template>
    <div class="p-8 bg-gray-100 min-h-screen">
        <h1 class="text-4xl font-bold mb-6">Login</h1>
        <p v-if="errorMessage" class="text-red-500">{{errorMessage}}</p>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <form class="space-y-4" @submit.prevent="login">
                <AuthInput v-model="email" labelName="Email" labelType="email" labelId="email"/>
                <AuthInput v-model="password" labelName="Password" labelType="password" labelId="password"/>
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Login</button>
            </form>
        </div>
    </div>
</template>