import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/style.css'
import AOS from 'aos';

if(AOS){
    AOS.init();
}

createApp(App).use(router).mount('#app')
