import './main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'
import { PRMDark } from './assets/themes'

const app = createApp(App)
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'PRMDark',
    themes: { PRMDark }
  }
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
