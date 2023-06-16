import { createRouter, createWebHistory } from 'vue-router'
import ClassSelection from '@/views/ClassSelection.vue'
import SkillSim from '@/views/SkillSim.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'class-selection',
      component: ClassSelection
    },
    {
      path: '/skillsim/:jobClassName',
      name: 'skill-sim',
      component: SkillSim,
      props: true
    }
  ]
})

export default router
