import {
    createRouter,
    createWebHistory
} from "vue-router";

// Components
import Home from '../pages/Home.vue';
import Shop from '../pages/Shop.vue';
import About from '../pages/About.vue';
import Login from '../pages/auth/LoginView.vue';
import Register from '../pages/auth/RegisterView.vue';

import CartView from '../pages/CartView.vue'
const routes = [

    // Auth
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    // ./auth
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/belanja',
        name: 'shop',
        component: Shop,
    },
    {
        path: '/tentang-kami',
        name: 'about',
        component: About,
    },

    // Cart
    {
        path:"/cart",
        name: 'cart',
        component: CartView,
    },
 ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router