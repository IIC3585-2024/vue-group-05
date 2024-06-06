<script setup lang="ts">
  import FullCalendar, {type CalendarOptions } from '@fullcalendar/vue3'
  import { computed, ref } from 'vue';
  import interactionPlugin from '@fullcalendar/interaction'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import { holidaysStore } from '../../stores/holidays'
  import { tasksStore } from '../../stores/tasks'
  import type { Holiday, Task } from '../../ts/interfaces';

  const currentHolidays = computed(() => holidaysStore.holidays.value.map((holiday: Holiday) => ({
    title: holiday.name,
    start: holiday.date,
    allDay: true,
    color: 'red'
  }))
);

  const currentTasks = computed(() => tasksStore.tasks.value.map((task: Task) => ({
    title: task.name,
    start: task.startDate + 'T' + task.startTime,
    end: task.endDate + 'T' + task.endTime,
    color: 'blue'
  }))
  );

  let calendarOptions: ref<CalendarOptions> = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
     events: [
      ...currentHolidays.value,
      ...currentTasks.value     
    ],
 
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'lowercase'
    },
  }; 
</script>

<template>
  <main class="p-8 bg-gray-100 min-h-screen">
    <FullCalendar :options="calendarOptions"/>
  </main>
</template>
