import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions';

const INITIAL_DATA =  [
    {
        id: 0,
        text: 'Найти работу',
        completed: false
    },
    {
        id:1,
        text: 'сделать TODO с redux',
        completed: false
    },
]

export const todoReducer = (state = INITIAL_DATA, action) => {
  switch(action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
           id: action.payload.id,
           text: action.payload.text ? action.payload.text : "Без текста",
          completed: false
        }
      ]
    }
    case TOGGLE_TODO: {
      return state.map(todo => (todo.id === action.payload.id) ? {...todo, completed: !todo.completed} : todo)
    }
    case DELETE_TODO: {
      return state.filter(todo => todo.id !== action.payload.id)
    }
    case EDIT_TODO: {
      return state.map(todo => (todo.id === action.payload.id) ? {...todo, text: action.payload.text ? action.payload.text : "Без текста"} : todo)
    }
    default: {
      return state;
    }
  }
}