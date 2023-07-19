import {
    createRouter,
    createWebHistory
} from "vue-router";

// Components
import Home from '../pages/Home.vue';
import Shop from '../pages/Shop.vue';
import About from '../pages/About.vue';
const routes = [
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
 ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router