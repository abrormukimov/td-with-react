import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id} todo={todo}
            handleChange={this.props.handleChangeProps}
            delTodoFromList={this.props.delTodoFromList}
            setUpdate={this.props.updateTodoProps}
          />
        ))}
      </ul>
    )
  }
}

export default TodoList
