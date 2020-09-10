import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex', marginBottom: '10px' }}>
        <input type="text" name="title" style={{ border: '1px solid #555', padding: '5px', flex: '10' }} placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Add" className="btn" style={{ flex: '1' }} />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
