import React from "react";
import { Provider } from "react-redux";
import { Todo } from "./Todo";
import store from '../store/todostore';

export const TodoPage = () => {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
};
