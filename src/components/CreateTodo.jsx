import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
    };
  }

  onChangeTodoText = e => {
    this.setState({
      todoText: e.target.value,
    });
  };

  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-10">
          <input
            onChange={this.onChangeTodoText}
            value={this.state.todoText}
            type="text"
            className="form-control"
            id="inputEmail3"
            placeholder="введите название задачи"
          />
          <div className="text-center">
            <button
              type="button"
              onClick={() => this.setState({ todoText: '' })}
              style={{ marginTop: '25px', marginRight: '15px' }}
              className="btn btn-danger">
              Сбросить
            </button>

            <button
              type="button"
              onClick={() => {
                this.props.addTodo(this.state.todoText, this.props.todos);
                this.setState({ todoText: '' });
              }}
              style={{ marginTop: '25px' }}
              className="btn btn-success">
              Добавить
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CreateTodo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
};
