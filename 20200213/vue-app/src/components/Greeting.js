import Vue from 'vue'

// const Greeting = new Vue({
//   el: '#app',
//   render: function(createElement) {
//     return createElement('p', 'Hello World')
//   }
// })

const Greeting = Vue.component('Greeting', {
  render: function(createElement) {
    return createElement('h1', { class: 'greeting' }, 'Hello, world!')
  }
})

export default Greeting
