import React from 'react'
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  state = {
    editing: false
  }

  handleEditing = () => {
    this.setState({
      editing: true
    })
  }

  handleUpdateState = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false
      })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { completed, id, title } = this.props.todo

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} className={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChange(id)}
          />
          <button onClick={() => this.props.delTodoFromList(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => this.props.setUpdate(e.target.value, id)}
          onKeyDown={this.handleUpdateState}
        />
      </li>
    )
  }
}

export default TodoItem
