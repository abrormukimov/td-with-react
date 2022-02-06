import React from 'react'
import Swal from 'sweetalert2'

class InputTodo extends React.Component {
  state = {
    title: ''
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: ''
      })
    } else {
      Swal.fire(
        'Title can\'t be blank',
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className='input-text'
          placeholder='Add todo'
          value={this.state.title}
          name="title"
          onChange={this.onChangeInput}
        />
        <button className='input-submit'>Submit</button>
      </form>
    )
  }
}

export default InputTodo
