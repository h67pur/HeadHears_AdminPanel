import Main from "../pages/Main.vue"
import Contacts from "../pages/Contacts.vue";
import Headphones from "../pages/Catalog/Headphones.vue";
import Choice from "../pages/topics/Choice.vue";
import Marshall from "../pages/Catalog/Headphones/Marshall.vue";
import Cart from "../components/Cart.vue";

const routes = [
    {
        path:'/',
        component: Main,
        meta: {
            auth: true,
            title: 'HeadHears'
        }
    },

    {
        path:'/contacts',
        component: Contacts,
        meta: {
            auth: true,
            title: 'Контакты'
        }
    },

    {
        path:'/topics/choice',
        component: Choice,
        meta: {
            auth: true,
            title: 'Полезное'
        }
    },

    {
        path:'/headphones',
        component: Headphones,
        meta: {
            auth: true,
            title: 'Наушники'
        }
    },


    // Наушники:
    {
        path:'/catalog/marshall',
        component: Marshall,
        meta: {
            auth: true,
            title: 'Наушники'
        }
    },

    {
        path:'/cart',
        component: Cart,
        meta: {
            auth: true,
            title: 'Корзина'
        }
    },

];
export default routes;