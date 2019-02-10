import {combineReducers} from "redux"
import {todoReducer} from './todoReducers';
import {visibilityFilter} from './filterReducer';

export default combineReducers({
  todoReducer,
  visibilityFilter
})