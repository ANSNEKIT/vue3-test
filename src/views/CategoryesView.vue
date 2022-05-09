<template>
    <div class="home">
        <h1>Категории</h1>
        <ul
            class="cards"
            style="list-style: none"
        >
            <li>
                <router-link
                    :to="{name: 'category', params: {category_id: 123} }"
                    exact-active-class
                >
                    <Card class="card">
                        <template #title>
                            Категория: Компьютеры
                        </template>
                    </Card>
                </router-link>
            </li>
            <li>
                <router-link
                    :to="{name: 'category', params: {category_id: 456} }"
                    exact-active-class
                >
                    <Card class="card">
                        <template #title>
                            Категория: Смартфоны
                        </template>
                    </Card>
                </router-link>
            </li>
        </ul>

    <!-- <router-view /> -->
    </div>
</template>

<script>
import Card from 'primevue/card';

export default {
    name: "CategoryesView",
    components: {
        Card,
    },

    created() {
        document.title = this.$route.meta.title || "asdf";
    },

    mounted() {},

    methods: {},

};
</script>

<style lang="scss" scoped>
.cards {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.card {
    width: 250px;
}
</style>
