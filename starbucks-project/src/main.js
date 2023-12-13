import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/style.css"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).mount('#app')
