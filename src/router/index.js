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
import HubungiKami from '../pages/Hubungi.vue';
import AccountInfo from "../pages/account/UserAccount.vue";
import DashboardAccountView from "../pages/account/DashboardAccountView.vue";
import WishlistView from "../pages/account/WishlistView.vue";
import OrderStory from "../pages/account/OrderStoryView.vue";
import DetailOrder from "../pages/account/DetailOrderView.vue";
import PageNotFound from "../pages/PageNotFound.vue";
// Auth Guard Vue Router
function GuardRouter() {
    var isAuthenticated = false;
    if (localStorage.getItem("loggedIn") == 'true') {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }
    if (isAuthenticated) {
        return true;
    } else {
        return {
            name: 'login'
        }
    }
}
const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
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
        path: '/testimoni-kami',
        name: 'testimoni',
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

    // Router For User Account
    {
        path: "/account",
        name: "account",
        beforeEnter: GuardRouter,
        component: DashboardAccountView,
        children: [{
                path: "",
                name: "account.info",
                component: AccountInfo
            },

            {
                path: "/wishlist",
                name: "account.wishlist",
                beforeEnter: GuardRouter,
                component: WishlistView,
                meta: {
                    title: "Wishlist Product"
                }
            },
            // Order History Transaction
            {
                path: "/OrderStory",
                name: "account.order",
                beforeEnter: GuardRouter,
                component: OrderStory,
                meta: {
                    title: "Histori Pemesanan"
                }
            },
            {
                path: "/detailpesanan/:transaction_id",
                name: "account.orderdetail",
                beforeEnter: GuardRouter,
                component: DetailOrder,
                meta: {
                    title: "Detail Order"
                }
            }
        ],
        meta: {
            title: "Account"
        }
    },
]

const router = createRouter({
    // mode: 'history',
    history: createWebHistory(),
    routes,
});

export default router