import React from "react";
import PropTypes from "prop-types";
import { toggleTodo } from "../actions/actions";
import { useDispatch } from "react-redux";

export const TodoUnit = ({id, completed, text }) => {
  const dispatch = useDispatch();
  return (
    <li className="todo-item"
      onClick={() => dispatch(toggleTodo(id))}
      style={{
        listStyle: "none",
        textDecoration: completed ? "line-through" : "none",
        fontStyle: completed ? "italic" : "normal",
        color: completed ? "bisque" : "white",
      }}
    >
      {text}
    </li>
  );
};

TodoUnit.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
