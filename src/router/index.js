import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView";
import CartView from "@/views/CartView";
import GoodsView from "@/views/GoodsView";
import CardsView from "@/views/CardsView";
import CategoryesView from "@/views/CategoryesView";
import CardView from "@/views/CardView";
import PageNotFoundView from "@/views/PageNotFoundView";
// import AppTest from "@/components/AppTest";

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
        path: "/categoryes/",
        name: "categoryes",
        meta: { title: '', layout: 'AppHeader' },
        component: CategoryesView,
    },
    {
        path: "/categoryes/:category_id",
        name: "category",
        meta: { title: '', layout: 'AppHeader' },
        component: CardsView,
        props: (route) => ({ categoryId: route.params.category_id })
    },
    {
        path: "/categoryes/:category_id/card/:id",
        name: "card",
        meta: { title: '', layout: 'AppHeader' },
        component: CardView,
    },
    {
        path: "/:catchAll(.*)",
        name: "page404",
        meta: { title: 'Страница не найдена', layout: 'AppHeader' },
        component: PageNotFoundView,
    },

    // {
    //     path: "/categoryes/",
    //     name: "categoryes",
    //     meta: { title: '', layout: 'AppHeader' },
    //     component: CategoryesView,
    //     children: [
    //         {
    //             path: ":blabla",
    //             name: "category",
    //             meta: { title: '', layout: 'AppHeader' },
    //             component: AppTest,

    //         },

    //     ],
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
