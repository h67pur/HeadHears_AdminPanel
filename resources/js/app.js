import { createApp} from "vue";
import App from './src/App.vue';
import Router from "./src/router/router.js";
import '../css/app.css';
import "primeicons/primeicons.css";
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import russian from './ru.json';

const app = createApp(App);
createApp(App)
app.use(PrimeVue,{
    locale: russian
});
app.use(Router);
app.use(ToastService);
app.directive('tooltip', Tooltip);
app.mount("#app");
