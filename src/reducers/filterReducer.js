import {SHOW_ALL, SET_VISIBILITY_FILTER} from '../actions'

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.payload.filter;
    }
    default : {
      return state;
    }
  }
}