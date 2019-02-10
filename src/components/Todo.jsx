import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.refs.title.focus();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = this.refs.title.value;

    this.props.editTodo(this.props.todo.id, title);
    this.setState({ editing: false });
  };

  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group d-flex">
          <input type="text" ref="title" className="form-control" />
          <button type="submit" className="btn btn-primary ml-2">
            <i className="fas fa-save" />
          </button>
        </div>
      </form>
    );
  };

  renderText = () => {
    const text = this.props.todo.text;
    return `${text} ${this.props.todo.completed === true ? '(completed)' : ''}`;
  };

  render() {
    const { todo } = this.props;
    return (
      <tr>
        <td
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}>
          {this.state.editing ? this.renderForm() : this.renderText()}
        </td>
        <td className="text-right">
          <span
            className="fas fa-minus-circle"
            onClick={() => this.props.deleteTodo(todo.id)}
            style={{
              color: 'white',
              fontSize: '20pt',
              marginRight: '20px',
            }}
          />
          <span
            className="fas fa-check-circle"
            onClick={() => this.props.toggleTodo(todo.id)}
            style={{
              color: 'white',
              fontSize: '20pt',
              marginRight: '20px',
            }}
          />
          <span
            className="fas fa-edit"
            onClick={() => this.setState({ editing: true })}
            style={{ color: 'white', fontSize: '20pt' }}
          />
        </td>
      </tr>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
