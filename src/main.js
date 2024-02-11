import './assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faCalendar, faVideo, faMessage, faGear, faCloud, faCloudRain, faWind, faSun, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App)

app.use(createPinia())

library.add(faHouse, faCalendar, faVideo, faMessage, faGear, faCloud, faCloudRain, faWind, faSun, faCompactDisc);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
