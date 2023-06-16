<script setup lang="ts">
import type { RouterView } from 'vue-router'
import prmLogo from '@/assets/prm-icon.png'
</script>

<template>
  <v-layout>
    <v-app-bar title="Return to Morroc Skill Planner">
      <template #image> <v-img :src="prmLogo"></v-img> </template>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-sheet>
          <router-view />
        </v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
