<template>
  <div class="home">
    <h1>Товары</h1>
    <ul
      class="cards"
      style="list-style: none"
    >
      <li>
        <router-link :to="{ name: 'card', params: {id: 111} }">
          <Card class="card">
            <template #title>
              Товар 111
            </template>
          </Card>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'card', params: {id: 222} }">
          <Card class="card">
            <template #title>
              Товар 222
            </template>
          </Card>
        </router-link>
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
