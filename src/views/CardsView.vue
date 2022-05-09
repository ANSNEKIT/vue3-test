<template>
    <div class="home">
        <h1 class="title">
            Товары
        </h1>

        <div class="filter">
            <form action="get" @submit="submitFilter">
                <div class="filter-row">
                    <span>Категория: </span>
                    <select
                        id="filter-category"
                        name="category"
                        @change="changeCategory"
                    >
                        <option value="null">
                            Выберите категорию
                        </option>
                        <option
                            v-for="option in filterCategoryes"
                            :key="option.id"
                            :value="option.value"
                            :selected="filter.category === option.value"
                        >
                            {{ option.title }}
                        </option>
                    </select>
                </div>

                <div class="filter-row">
                    <label for="min-price">
                        Минимальная цена:
                        <input
                            id="min-price"
                            type="text"
                            name="min-price"
                            v-model="filter.priceMin"
                        >
                    </label>
                </div>
                <div class="filter-row">
                    <label for="max-price">
                        Максимальная цена:
                        <input
                            id="max-price"
                            type="text"
                            name="max-price"
                            v-model="filter.priceMax"
                        >
                    </label>
                </div>


                <button type="button" @click="applyFilter">
                    Применить
                </button>
                <button type="button" @click="clearFilter">
                    Очистить
                </button>
            </form>
        </div>

        <template v-if="isEmpty">
            <h2>Список товаров по фильтру пуст</h2>
        </template>
        <template v-else>
            <ul
                class="cards"
                style="list-style: none"
            >
                <li
                    v-for="(card, index) in getFilteredGoods"
                    :key="index"
                >
                    <Card
                        class="card"
                        @click="onLink(card.id)"
                    >
                        <template #title>
                            {{ card.name }}
                        </template>

                        <template #content>
                            Цена: {{ card.price }} руб.
                        </template>
                    </Card>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
import Card from 'primevue/card';

export default {
    name: "CardsView",
    components: {
        Card,
    },

    props: {
        categoryId: {
            type: String,
            default: '',
        },
    },

    data: () => ({
        filter: {
            category: '',
            priceMin: '',
            priceMax: '',
        },
        isEmpty: false,
        goods: {
            '123': [
                {
                    id: '111',
                    name: 'Ноутбук 1111',
                    category: 'notebook',
                    price: '80000'
                },
                {
                    id: '222',
                    name: 'Ноутбук 2222',
                    category: 'notebook',
                    price: '200000'
                },
                {
                    id: '333',
                    name: 'Ноутбук 3333',
                    category: 'notebook',
                    price: '30000'
                },
                {
                    id: '444',
                    name: 'Компьютер 4444',
                    category: 'desktop',
                    price: '60000'
                },
                {
                    id: '555',
                    name: 'Компьютер 5555',
                    category: 'desktop',
                    price: '100000'
                },
                {
                    id: '666',
                    name: 'Компьютер 6666',
                    category: 'desktop',
                    price: '150000'
                },
            ],
            '456': [
                {
                    id: '111',
                    name: 'Xyami 1111',
                    category: 'smaprtphone',
                    price: '30000'
                },
                {
                    id: '222',
                    name: 'China phone 2222',
                    category: 'smaprtphone',
                    price: '50000'
                },
                {
                    id: '333',
                    name: 'Samsun 3333',
                    category: 'smaprtphone',
                    price: '100000'
                },
                {
                    id: '444',
                    name: 'Планшет Samsun 4444',
                    category: 'tablet',
                    price: '90000'
                },
                {
                    id: '555',
                    name: 'Планшет Aply 5555',
                    category: 'tablet',
                    price: '200000'
                },
            ],
        },
        filteredGoods: [],
        filterCategoryes: [
            {
                id: '0',
                value: 'notebook',
                title: 'Ноутбуки'
            },
            {
                id: '1',
                value: 'desktop',
                title: 'Компьютеры'
            },
        ],
    }),


    computed: {
        getGoods() {
            return this.goods[this.categoryId];
        },

        getFilteredGoods() {
            if (this.filteredGoods.length > 0) {
                return this.filteredGoods;
            }

            return this.getGoods;
        },
    },

    created() {
        document.title = this.$route.meta.title || "asdf";
    },

    mounted() {
        if (Object.keys(this.$route.query).length > 0) {
            if ("category" in this.$route.query) {
                this.filter.category = this.$route.query.category
            }
            if ("priceMin" in this.$route.query) {
                this.filter.priceMin = this.$route.query.priceMin
            }
            if ("priceMax" in this.$route.query) {
                this.filter.priceMax = this.$route.query.priceMax
            }

            this.applyFilter();
        }
    },


    methods: {
        onLink(cardId) {
            this.$router.push({
                name: 'card', params: { id: cardId }
            });
        },
        changeCategory(evt) {
            this.filter.category = evt.target.value;
        },
        changePriceMin(evt) {
            this.filter.priceMin = evt.target.value;
        },
         changePriceMax(evt) {
            this.filter.priceMax = evt.target.value;
        },
        submitFilter(evt) {
            evt.preventDefault();
        },
        applyFilter() {
            let filteredGoods = [];
            if (this.filter.category !== 'null') {
                filteredGoods = this.getGoods.filter((good) => String(good.category) === String(this.filter.category));
            } else {
                filteredGoods = [];
            }

            if (this.filter.priceMin) {
                filteredGoods = filteredGoods.filter((good) => Number(good.price) >= Number(this.filter.priceMin));
            }

            if (this.filter.priceMax) {
               filteredGoods = filteredGoods.filter((good) => Number(good.price) <= Number(this.filter.priceMax));
            }

            if (filteredGoods.length === 0) {
                this.isEmpty = true;
            } else {
                this.filteredGoods = filteredGoods;
                this.isEmpty = false;
            }



            const query = {};
            if (this.filter.category) {
                query.category = this.filter.category;
            }

            if (this.filter.priceMin) {
                query.priceMin = this.filter.priceMin;
            }

            if (this.filter.priceMax) {
                query.priceMax = this.filter.priceMax;
            }


            this.$router.push({
                name: 'category',
                params: { category_id: this.categoryId },
                query,
            });
        },
        clearFilter() {
            this.filter = {
                category: '',
                priceMin: '',
                priceMax: '',
            }

            this.isEmpty = false;

            this.$router.push({
                name: 'category',
                params: { category_id: this.categoryId },
                query: {}
            });
        },
    },

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

.title {
    margin-bottom: 20px;
}

.filter {
    margin-bottom: 100px;
}

.filter-row {
    margin-bottom: 20px;
}
</style>
