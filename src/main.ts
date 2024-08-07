import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import Aura from '@primevue/themes/aura';
import Image from 'primevue/image';
import router from './router/routes';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import DataView from 'primevue/dataview';
import Button from 'primevue/button';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('PVImage', Image);
app.component('PVTabs', Tabs);
app.component('PVTabList', TabList);
app.component('PVTab', Tab)
app.component('PVDataView', DataView)
app.component('PVButton', Button)

app.mount('#app')