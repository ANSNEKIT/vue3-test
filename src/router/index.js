import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView";
import CartView from "@/views/CartView";
import GoodsView from "@/views/GoodsView";
import CardsView from "@/views/CardsView";
import CategoryView from "@/views/CategoryView";
import CardView from "@/views/CardView";

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
    {
        path: "/categoryes/:category_id",
        name: "category",
        meta: { title: '', layout: 'AppHeader' },
        component: CardsView,
    },

    {
        path: "/categoryes",
        name: "categoryes",
        meta: { title: '', layout: 'AppHeader' },
        component: CategoryView,
    },
    {
        path: "/categoryes/:category_id/card/:id",
        name: "card",
        meta: { title: '', layout: 'AppHeader' },
        component: CardView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
