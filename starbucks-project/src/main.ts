import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/style.css"
import { Quasar } from 'quasar'

import router from "./router/index"
// @ts-ignore
import quasarUserOptions from './quasar-user-options'
import {createPinia} from "pinia"

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)

app.config.globalProperties.$router = router

app.use(Quasar, quasarUserOptions)

app.mount('#app')