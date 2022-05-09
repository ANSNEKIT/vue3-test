<template>
    <component :is="layout">
        <RouterView />
    </component>
</template>

<script>
// import "primeflex/primeflex.css";
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import AppHeader from "@/layouts/AppHeader";

export default {
    name: "App",
    components: {
        AppHeader,
    },

    computed: {
        layout() {
            return this.$route.meta.layout || "AppHeader";
        },
    },
    created() {
        document.title = this.$route.meta.title || "Главная";
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
