let nextTodoId = 0

// This is the action to add a new Todo.
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});


//HINT: Add the rest of the actions here


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}