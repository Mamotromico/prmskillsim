import { createRouter, createWebHistory } from 'vue-router'
import ClassSelection from '../views/ClassSelection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'class-selection',
      component: ClassSelection
    },
    {
      path: '/skillsim',
      name: 'skill-sim',
      component: () => {
        import('@/views/SkillSim.vue')
      }
    }
  ]
})

export default router
