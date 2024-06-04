<script setup>
import AuthInput from '../components/AuthView/AuthInput.vue'
import { supabase } from '../supabaseClient';
import { ref } from 'vue';

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

async function register(event) {
    const data = { email: email.value, password: password.value }
	const { user, error } = await supabase.auth.signUp(data);

	if (error) {
		errorMessage.value = error.message;
	} else {
		successMessage.value = 'Registration successful. Please check your email to confirm your account.';
	}
}
</script>

<template>
    <div class="p-8 bg-gray-100 min-h-screen">
        <h1 class="text-4xl font-bold mb-6">Register</h1>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
		<p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <form class="space-y-4" @submit.prevent="register">
                <AuthInput v-model="email" labelName="Email" labelType="email" labelId="email"/>
                <AuthInput v-model="password" labelName="Password" labelType="password" labelId="password"/>
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Register</button>
            </form>
        </div>
    </div>
</template>
