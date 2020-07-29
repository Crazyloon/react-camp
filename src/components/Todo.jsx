import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoUnit } from './TodoUnit';
import { addTodo } from '../actions/actions';
import { TodoFilters } from './TodoFilters';
import { VISIBILITY_FILTERS } from '../constants/constants'

export const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector(state => state.visibilityFilters);
  let listItems = useSelector(state => state.todos);
  listItems = listItems.filter(item => {
    switch(filter){
      case VISIBILITY_FILTERS.SHOW_ALL:
        return item;
      case VISIBILITY_FILTERS.SHOW_COMPLETED:
        return item.completed === true;
      case VISIBILITY_FILTERS.SHOW_ACTIVE:
        return item.completed === false;

      default: 
        return item;
    }
  });

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  }

  return (
    <div className="flex flex-justify-center mt-3">
      <div className="todo-list">
        <h2 className="text-center">My Todo List</h2>
        <div className="input-group mt-1">
          <h3 className="accent">Add a Todo</h3>
          <label>New Todo</label>
          <input className="form-input" type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
        </div>
        <button onClick={() => handleAddTodo()} className="btn btn-primary w100">Add Todo</button>
        
        <h3 className="mt-2 accent">Filters</h3>
        <div className="visibility-filters">
          <TodoFilters activeFilter={filter}/>
        </div>

        <div className="list-items mt-2">
        <h3 className="accent">Todo List</h3>
          {
            listItems.map(todo => <TodoUnit 
              key={todo.id}
              id={todo.id}
              text={todo.content}
              completed={todo.completed}
            />)}
        </div>
      </div>
    </div>
  )
}