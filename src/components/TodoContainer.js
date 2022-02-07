import React from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import Header from './Header'
import InputTodo from './InputTodo';
import TodoList from './TodoList'


class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ],
  }

  handleChange = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      }
    });
  };

  delTodo = id => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos.filter(todo => {
            return todo.id !== id
          })
        ]
      }
    })
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    })
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10"')
    //   .then(response => response.json())
    //   .then(data => this.setState({todos: data}))
    const newTodos = JSON.parse(localStorage.getItem('todos'))
    if (newTodos) {
      this.setState({
        todos: newTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem('todos', temp)
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='inner'>
          <Header />
          <InputTodo
            addTodoProps={this.addTodoItem}
          />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            delTodoFromList={this.delTodo}
            updateTodoProps={this.setUpdate}
          />
        </div>
      </div>
    )
  }
}

export default TodoContainer
