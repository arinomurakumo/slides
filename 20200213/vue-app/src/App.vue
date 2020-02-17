<template>
  <div id="app">
    <ul>
      <li>App ul list 1</li>
      <li>App ul list 2</li>
      <li>App ul list 3</li>
    </ul>
    <TodoList :items="items" />
    <About />
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import About from './components/About'

export default {
  name: 'app',
  data: function() {
    return {
      items: [
        {
          id: 1,
          text: 'to do 1'
        },
        {
          id: 2,
          text: 'to do 2'
        },
        {
          id: 3,
          text: 'to do 3'
        }
      ]
    }
  },
  components: {
    TodoList,
    About
  }
}
</script>
