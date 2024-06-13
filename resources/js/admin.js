import { createApp} from "vue";
import App from './admin/App.vue';
import '../css/app.css';
import Tres from '@tresjs/core'
import "primeicons/primeicons.css";
import 'primevue/resources/themes/aura-light-blue/theme.css'
import PrimeVue from 'primevue/config';
import russian from './ru.json';
import Tooltip from 'primevue/tooltip';
import {createRouter, createWebHistory} from "vue-router";
import axios from "axios";

const admin = createApp(App);
createApp(App)
admin.use(PrimeVue,{
    locale: russian
});
admin.use(Tres);
admin.directive('tooltip', Tooltip);

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/',
            component: ()=>import('./admin/pages/Home.vue'),
            name: 'admin.home',
        },
        {
            path: '/admin/login',
            component: () => import('./admin/pages/Login.vue'),
            name: 'admin.login',
        },
        {
            path: '/admin/products',
            component: () => import('./admin/pages/Products.vue'),

        }
        ,
        {
            path: '/admin/statistics',
            component: () => import('./admin/pages/Statistics.vue'),

        }
    ]
    }
)
router.beforeEach((to, from, next) => {
    if (to.name === 'admin.login') {
        return next();
    }

    axios.post('/admin/auth')
        .then(response => {
            if (!response.data.auth) {
                return next({ name: 'user.login' });
            }
            next();
        })
        .catch(() => {
            next({ name: 'user.login' });
        });
});
admin.use(router);
admin.mount("#admin");
