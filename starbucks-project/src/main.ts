import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/style.css"
import { Quasar } from 'quasar'
// @ts-ignore
import router from "./router/index.js"
// @ts-ignore
import quasarUserOptions from './quasar-user-options'

const app = createApp(App)
app.use(router)

app.use(Quasar, quasarUserOptions)

app.mount('#app')