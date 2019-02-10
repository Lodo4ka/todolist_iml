import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import CreateTodo from '../components/CreateTodo';

class CreateTodoContainer extends Component {

  render() {
    return (
      <CreateTodo addTodo={this.props.addTodo}
      todos={this.props.todos}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text, todo) => dispatch(addTodo(text, todo))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodoContainer);
