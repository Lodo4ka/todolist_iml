import React from 'react';
import { connect } from 'react-redux';
import {
  setVisibilityFilter,
  deleteTodo,
  toggleTodo,
  getVisibleTodos,
  editTodo
} from '../actions';

import ListTodo from '../components/ListTodo.jsx';

class ListTodoContainer extends React.Component {
  render() {
    return <ListTodo todos={this.props.todos}
    visibilityFilter={this.props.visibilityFilter}
    deleteTodo={this.props.deleteTodo}
    toggleTodo={this.props.toggleTodo}
    setVisibilityFilter={this.props.setVisibilityFilter}
    editTodo={this.props.editTodo}
    />;
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todoReducer, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    editTodo: (id, title) => dispatch(editTodo(id, title)),
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodoContainer);
