import { createApp} from "vue";
import App from './src/App.vue';
import Router from "./src/router/router.js";
import '../css/app.css';
import Tres from '@tresjs/core'
import "primeicons/primeicons.css";
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config';
import russian from './ru.json';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);
createApp(App)
app.use(PrimeVue,{
    locale: russian
});
app.use(Tres);
app.directive('tooltip', Tooltip);
app.use(Router);
app.mount("#app");
