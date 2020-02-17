<template>
  <ul v-if="items.length">
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
  <p v-else>No items found.</p>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['items']
}
</script>

<style scoped>
ul {
  background: aliceblue;
  list-style: upper-roman;
}
</style>
