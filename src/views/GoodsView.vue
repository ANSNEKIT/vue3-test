<template>
  <ul
    class="cards"
    style="list-style: none"
  >
    <li
      v-for="(item, index) in 5"
      :key="index"
    >
      <router-link :to="{ name: 'category'}">
        <Card class="card">
          <template #title>
            Категория {{ index + 1 }}
          </template>
        </Card>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Card from 'primevue/card';

export default {
  name: 'AppGoods',
  components: {
      Card,
  },

  created() {
        document.title = this.$route.meta.title || "Главная";
    },
}
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
