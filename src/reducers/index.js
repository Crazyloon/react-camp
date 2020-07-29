import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilters from './visibilityFilters'


export default combineReducers({todos, visibilityFilters});