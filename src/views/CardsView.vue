<template>
  <div class="home">
    <h1>Товары</h1>
    <ul
      class="cards"
      style="list-style: none"
    >
      <li
        v-for="(card, index) in getGoods"
        :key="index"
      >
        <Card
          class="card"
          @click="onLink(card.id)"
        >
          <template #title>
            {{ card.name }}
          </template>
        </Card>
      </li>
    </ul>
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
        goods: {
            '123': [
                {id: '111', name: 'товар 111'},
                {id: '222', name: 'товар 222'},
                {id: '333', name: 'товар 333'},
            ],
            '456': [
                {id: '999', name: 'товар 999'},
                {id: '888', name: 'товар 888'},
                {id: '777', name: 'товар 777'},
            ],
        }
    }),


    computed: {
        getGoods() {
            return this.goods[this.categoryId];
        },
    },

    created() {
        document.title = this.$route.meta.title || "asdf";
    },


    methods: {
        onLink(cardId) {
            this.$router.push({
                name: 'card', params: { id: cardId }
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
</style>
