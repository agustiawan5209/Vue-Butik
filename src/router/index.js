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

import CartView from '../pages/CartView.vue';
import HubungiKami from '../pages/Hubungi.vue'
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
        path: "/shop/:slug?",
        name: "shop",
        props: false,
        component: Shop,
        meta: {
            title: "SHOP",
        }
    },
    {
        path: '/tentang-kami',
        name: 'about',
        component: About,
    },
    {
        path: '/hubungi-kami',
        name: 'hubungi',
        component: HubungiKami,
    },

    // Cart
    {
        path: "/cart",
        name: 'cart',
        component: CartView,
    },

    // Route Detail Product
    {
        path: "/View/:name/:id",
        name: "detailproduct",
        component: () => import("../pages/DetailView.vue"),
        meta: {
            title: "Detail Product"
        }
    },
    {
        path: "/checkout",
        name: "checkout",
        component: () => import("../pages/CheckoutView.vue"),
        meta: {
          title: "CheckOut"
        }
      },
    {
        path: "/success",
        name: "success",
        component: () => import("../pages/SuccessView.vue"),
        meta: {
            title: "Success Checkout"
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router