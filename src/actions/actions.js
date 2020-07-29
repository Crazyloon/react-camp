import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

// let nextTodoId = 0;
let nextTodoId = 3; // initial data has 0-3 already

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
