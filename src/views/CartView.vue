<template>
  <Card class="card">
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
</template>

<script>
import Card from 'primevue/card';

export default {
    name: 'AppCart',
    components: {
        Card,
    },
}
</script>

<style lang="scss" scoped>
.card {
    width: 400px;
}
</style>
