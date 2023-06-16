<script setup lang="ts">
import { capitalize, computed, type ComputedRef } from 'vue'
const props = defineProps<{ jobClassName: string }>()
const jobClassShortName = computed(() => {
  return props.jobClassName.replace(/\s/g, '').toLowerCase()
})
const iconUrl = computed(() => {
  return `/src/assets/class-icons/${jobClassShortName.value}.webp`
})
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      v-ripple="{ class: 'text-white' }"
      class="h-100 super-text-center"
      :elevation="isHovering ? 16 : 2"
      :to="`/skillsim/${jobClassShortName}`"
    >
      <template #title>
        <v-img max-width="25px" :src="iconUrl" />
        {{ jobClassName }}
      </template>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>
.super-text-center {
  text-align: center;
  text-align: -webkit-center;
  text-align: -moz-center;
}
</style>
