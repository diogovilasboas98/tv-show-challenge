import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import Aura from '@primevue/themes/aura';
import router from './router/routes';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')