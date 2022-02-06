const todos = [
  {
    id: 1,
    todo: 'Hey',
    completed: true,
  },
  {
    id: 2,
    todo: 'Hey',
    completed: false
  }
]

const another = todos.map(todo => {
  return {
    ...todo,
    completed: !todo.completed
  }
})

console.log(another)