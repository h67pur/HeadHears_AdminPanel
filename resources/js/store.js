import { createApp} from "vue";
import App from './store/App.vue';
import Router from "./store/router/router.js";
import '../css/app.css';
import "primeicons/primeicons.css";
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import russian from './ru.json';
const app = createApp(App);
createApp(App)
app.use(PrimeVue,{
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-dark-mode',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }});

app.use(Router);
app.use(ToastService);
app.directive('tooltip', Tooltip);
app.mount("#store");