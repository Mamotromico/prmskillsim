<script setup lang="ts">
import type { SkillData } from '@/types'
import { computed } from 'vue'

const props = defineProps<{ skill: SkillData | undefined }>()

const skillShortName = computed(() => {
  return props.skill?.skillName.replace(/\s|-/g, '').toLowerCase()
})

const iconUrl = computed(() => {
  return `/src/assets/skill-icons/${skillShortName.value}.webp`
})
</script>

<template>
  <v-card>
    <template #title>{{ skill?.skillName }}</template>
    <template #text>
      <v-row>
        <v-col cols="4"><v-btn density="compact" icon="mdi-minus" /></v-col>
        <v-col cols="4">
          <v-img :src="iconUrl" />
        </v-col>
        <v-col cols="4"><v-btn density="compact" icon="mdi-plus" /></v-col>
      </v-row>
    </template>
  </v-card>
</template>
