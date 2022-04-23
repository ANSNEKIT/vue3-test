<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <router-link to="/">
          <i class="pi pi-box" />
        </router-link>
      </template>
      <!-- <template #item="{ item }">
        <router-link
          v-slot="{href, route, navigate, isActive, isExactActive}"
          :to="item.to"
          custom
        >
          <a
            :href="href"
            :class="{'active-link': isActive, 'active-link-exact': isExactActive}"
            @click="navigate"
          >{{ route.fullPath }}</a>
        </router-link>
      </template> -->
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
                   to: '/',
                },
                {
                   label:'Товары',
                   icon:'pi pi-fw pi-pencil',
                   to: '/goods',
                },
                {
                   label:'Корзина',
                   icon:'pi pi-fw pi-user',
                   to: '/cart',
                },
                {
                   label:'О нас',
                   icon:'pi pi-fw pi-calendar',
                   to: '/about',
                },
             ]
    }),
};
</script>

<style></style>
