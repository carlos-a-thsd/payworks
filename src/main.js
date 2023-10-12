import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons' ;
import 'bootstrap/dist/css/bootstrap.css';
library.add(fas)

createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')
