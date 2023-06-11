<script setup lang="ts">
import type { RouterView } from 'vue-router'
</script>

<template>
  <v-layout>
    <v-app-bar title="Return to Morroc Skill Planner"></v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
