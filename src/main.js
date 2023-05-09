import { createApp } from 'vue'
import App from './App.vue'

// import css
import './assets/css/app.css'

// import router
import router from './router/index'

const app = createApp(App)

app.use(router)
app.mount('#app')
