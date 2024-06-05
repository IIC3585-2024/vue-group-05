<script>
import HomeButton from './HomeButton.vue'
import NavbarButton from './NavbarButton.vue'

export default {
    components: {
        HomeButton,
        NavbarButton,
    }
}
</script>

<template>
    <div class="flex space-x-5 my-3 items-center">
        <HomeButton />
        <NavbarButton route_name="/tasks" route_text="Time Tracker" />
        <NavbarButton route_name="/projects" route_text="Projects" />
        <NavbarButton route_name="/labels" route_text="Labels" />
    </div>
</template>