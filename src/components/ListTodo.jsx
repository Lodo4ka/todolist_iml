import React, { Component } from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions';
import './ListTodo.css';
import Todo from './Todo.jsx';
import PropTypes from 'prop-types';

export default class ListTodo extends Component {
  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
        <nav style={{ marginTop: '60px' }}>
          <ul className="breadcrumb justify-content-between">
            <li
              className={`col-4 text-center link ${
                this.props.visibilityFilter === SHOW_ALL ? 'active' : ''
              }`}
              onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}>
              Все
            </li>
            <li
              className={`col-4 text-center link ${
                this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : ''
              }`}
              onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}>
              Завершенные
            </li>
            <li
              className={`col-4 text-center link ${
                this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : ''
              }`}
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}>
              Активные
            </li>
          </ul>
        </nav>
        {this.props.todos.length !== 0 ? (
          <table
            style={{ marginTop: '60px' }}
            className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  Задачи
                </th>
                <th scope="col" className="text-center">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map(todo => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodo={this.props.deleteTodo}
                  toggleTodo={this.props.toggleTodo}
                  editTodo={this.props.editTodo}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{ marginTop: '50px' }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1">
            <div className="alert alert-danger" role="alert">
              Список пуст
            </div>
          </div>
        )}{' '}
      </div>
    );
  }
}

ListTodo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
};
