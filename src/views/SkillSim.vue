<script setup lang="ts">
import { computed } from 'vue'
import SkillCard from '@/components/SkillCard.vue'
import type { JobData } from '@/types.js'
import JOBCLASS from '@/assets/class-data/'
const props = defineProps<{ jobClassName: string }>()

const jobDataArray = computed(() => {
  return getJobData(new Array<JobData>(), props.jobClassName)
})

function getJobData(jobDataArray: Array<JobData>, jobName: string) {
  const jobData: JobData = JOBCLASS[jobName]
  jobDataArray.unshift(jobData)
  if (jobData.prerequisite != 'none') {
    getJobData(jobDataArray, jobData.prerequisite)
  }
  return jobDataArray
}
</script>

<template>
  <v-container>
    <v-row v-for="jobClass in jobDataArray">
      <v-col cols="12">{{ jobClass.jobName }}: {{ jobClass.skillPoints }}</v-col>
      <v-col cols="2" v-for="skillData in jobClass.skills">
        <skill-card :skill="skillData" />
      </v-col>
    </v-row>
  </v-container>
</template>
