<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <router-link to="/">
                    <i class="pi pi-box" />
                </router-link>
            </template>
            <!-- <router-link :to="item.to"></router-link> -->
            <template #end>
                <router-link to="/cart">
                    <i class="pi pi-shopping-cart" />
                </router-link>
            </template>
        </Menubar>
    </div>

    <slot />
</template>

<script>
import Menubar from "primevue/menubar";
export default {
    name: "AppHeader",
    components: {
        Menubar,
    },
    data: () => ({
        items: [
                {
                   label:'Главная',
                   icon:'pi pi-apple',
                   to: { name: 'home'},
                },
                {
                   label:'Товары',
                   icon:'pi pi-fw pi-pencil',
                   to: { name: 'categoryes'},
                },
                {
                   label:'Корзина',
                   icon:'pi pi-fw pi-user',
                   to: { name: 'cart'},
                },
                {
                   label:'О нас',
                   icon:'pi pi-fw pi-calendar',
                   to: { name: 'about'},
                },
             ]
    }),
};
</script>

<style></style>
