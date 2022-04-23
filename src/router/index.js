import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView";
import CartView from "@/views/CartView";
import GoodsView from "@/views/GoodsView";

const routes = [
    {
        path: "/",
        name: "home",
        meta: { title: 'Главная', layout: 'AppHeader' },
        component: HomeView,
    },
    {
        path: "/goods",
        name: "goods",
        meta: { title: 'Товары', layout: 'AppHeader' },
        component: GoodsView,
    },
    {
        path: "/cart",
        name: "cart",
        meta: { title: 'Корзина', layout: 'AppHeader' },
        component: CartView,
    },
    {
        path: "/about",
        name: "about",
        meta: { title: 'О нас', layout: 'AppHeader' },
        component: AboutView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
