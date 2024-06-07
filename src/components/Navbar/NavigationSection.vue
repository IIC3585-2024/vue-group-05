<script>
import HomeButton from "./HomeButton.vue";
import NavbarButton from "./NavbarButton.vue";
import { inject } from "vue";

export default {
  components: {
    HomeButton,
    NavbarButton,
  },
  setup() {
    const session = inject("session");
    return {
      session,
    };
  },
};
</script>

<template>
  <div class="flex space-x-5 my-3 items-center">
    <HomeButton />
    <NavbarButton
      v-if="session"
      route_name="/tasks"
      route_text="Time Tracker"
    />
    <NavbarButton v-if="session" route_name="/projects" route_text="Projects" />
    <NavbarButton v-if="session" route_name="/labels" route_text="Labels" />
    <NavbarButton v-if="session" route_name="/calendar" route_text="Calendar" />
  </div>
</template>
