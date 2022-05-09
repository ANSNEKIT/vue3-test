<template>
    <div class="home">
        <h1>Is home page</h1>
    </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from "vuex";

export default {
    name: "HomeView",
    computed: {},

    created() {
        document.title = this.$route.meta.title || "Главная";
    },

    mounted() {},

    methods: {
        postData() {
            // Получить данные из бекенда
            // return ddd
        },
    },
};
</script>
