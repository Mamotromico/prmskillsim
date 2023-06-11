<script setup lang="ts">
import type { RouterView } from 'vue-router';
import { NLayout, NPageHeader, NLayoutHeader, NLayoutFooter, NLayoutContent } from 'naive-ui'

</script>

<template>
    <n-layout>
        <n-layout-header>
            <n-page-header></n-page-header>
        </n-layout-header>
        <n-layout-content>
            <RouterView />
        </n-layout-content>
        <n-layout-footer></n-layout-footer>
    </n-layout>
</template>

<style scoped>

</style>
