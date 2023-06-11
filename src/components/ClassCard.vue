<script setup lang="ts">
import { capitalize, computed, type ComputedRef } from 'vue'
const props = defineProps<{ jobClassName: string }>()
const iconUrl = computed(() => {
  return `/src/assets/class-icons/${capitalize(
    props.jobClassName.replace(/\s/g, '').toLowerCase()
  )}.webp`
})
</script>

<template>
  <v-card class="h-100 super-text-center">
    <template #title>
      <v-img max-width="25px" :src="iconUrl" />
      {{ jobClassName }}
    </template>
  </v-card>
</template>

<style lang="scss" scoped>
.super-text-center {
  text-align: center;
  text-align: -webkit-center;
  text-align: -moz-center;
}
</style>
