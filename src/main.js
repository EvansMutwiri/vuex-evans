import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from '@/data/store'

store.subscribe((mutation, state) => {
    localStorage.setItem('users', JSON.stringify(state.users))
})

const app = createApp(App)
app.use(store)
app.mount('#app')
