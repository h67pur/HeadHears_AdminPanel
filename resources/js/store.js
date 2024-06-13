import { createApp} from "vue";
import App from './store/App.vue';
import Router from "./store/router/router.js";
import '../css/app.css';
import "primeicons/primeicons.css";
import 'primevue/resources/themes/aura-light-blue/theme.css'
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
app.mount("#store");