import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import './assets/main.css'
import Button from "primevue/button";
import InputNumber from 'primevue/inputnumber'


const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);

app.component('Button', Button);
app.component('InputNumber', InputNumber);


app.mount('#app')
