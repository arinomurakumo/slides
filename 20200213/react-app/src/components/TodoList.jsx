import React from 'react'

import classes from './TodoList.module.css'

const TodoList = props => {
  const items = props.items
  if (items.length < 0) {
    return <p>No items found.</p>
  }

  return (
    <ul className={classes.items}>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

// // const TodoList = function TodoList(props) {
// const TodoList = props => {
//   const items = props.items

//   return (
//     <>
//       {0 < items.length ? (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>{item.text}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No items found.</p>
//       )}
//     </>
//   )
// }

export default TodoList
