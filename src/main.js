/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'


// Components
// import MainLayout from '@/components/main/MainLayout'
import App from './App.vue'


// Composables
import { createApp } from 'vue'
import router from './router'


// createApp(App).use(router).mount('#app')

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router' // <---

// createApp(App).use(router).mount('#app')