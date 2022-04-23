<template>
  <div class="cards">
    <Card
      v-for="(item, index) in 10"
      :key="index"
      class="card"
    >
      <template #title>
        Simple Card
      </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
          quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';

export default {
  name: 'AppGoods',
  components: {
      Card,
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
