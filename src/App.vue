<script setup>
import { ref, onMounted, provide } from 'vue'
import NavBar from './components/Navbar/Navbar.vue'
import { supabase } from './supabaseClient'

const session = ref(JSON.parse(localStorage.getItem('supabase_session')) || null)

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    if (data.session) {
      session.value = data.session
      localStorage.setItem('supabase_session', JSON.stringify(data.session))
    }
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
    if (_session) {
      localStorage.setItem('supabase_session', JSON.stringify(_session))
    } else {
      localStorage.removeItem('supabase_session')
    }
  })
})

provide('session', session)
</script>

<template>
  <NavBar :session="session"/>
  <RouterView />
</template>
