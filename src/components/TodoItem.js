import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: this.props.todo.completed ? 'lightgray' : 'lightyellow',
      borderRadius: '5px',
      marginBottom: '10px',
      padding: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      transition: '0.3s ease'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {' '} {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '5px',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
