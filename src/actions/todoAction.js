export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const addTodo = (title, todos) => {
  let lastId = todos.length ? todos[todos.length-1].id : 0;
  return {
    type: ADD_TODO,
    payload : {
      id: todos.length ? ++lastId : 0,
      text: title
    }
  };
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id: id
    }
  };
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload : {
      id: id
    }
  }
}

export const editTodo = (id, title) => {
  return {
    type: EDIT_TODO,
    payload : {
      id: id,
      text: title
    }
  }
}