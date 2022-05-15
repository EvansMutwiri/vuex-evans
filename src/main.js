import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from '@/data/store'

const app = createApp(App)
app.use(store)
app.mount('#app')
