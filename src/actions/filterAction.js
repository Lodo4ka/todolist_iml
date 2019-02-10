export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter: filter
    }
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
