import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type SkillPool = {
  [className: string]: {
    available: number
    max: number
  }
}

export const skillSimStore = defineStore('skillSimStore', () => {
  const availableSkillPoints: Ref<SkillPool> = ref({})
})
