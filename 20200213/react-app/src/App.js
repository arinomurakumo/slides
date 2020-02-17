import React from 'react'

import TodoList from './components/TodoList'
import classes from './App.css'

function App() {
  const items = [
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

  return (
    <div className="App">
      <ul className={classes.items}>
        <li>App ul list 1</li>
        <li>App ul list 2</li>
        <li>App ul list 3</li>
      </ul>
      <TodoList items={items} />
    </div>
  )
}

export default App

// const Greeting = (
//   <h1 className="greeting">Hello, world!</h1>
// )

// const Greeting = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello, world!'
// )
