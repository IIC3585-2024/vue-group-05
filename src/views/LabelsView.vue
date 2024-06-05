<script setup>
import { onMounted, inject } from 'vue'
import LabelList from '../components/LabelView/LabelList.vue';
import NewLabel from '../components/LabelView/NewLabel.vue';
import { labelsStore } from '../stores/labels.ts';

const session = inject('session')

const { fetchLabels } = labelsStore

onMounted(() => {
  if (!session.value) {
    return
  }
  fetchLabels(session.value.user.id)
})

</script>

<template>
    <div class="w-full">
        <NewLabel />
        <LabelList />
    </div>
</template>