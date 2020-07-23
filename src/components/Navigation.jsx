import React from "react";

export const Navigation = ({currentLesson, onSetLesson}) => {
  return (
    <header className="navigation">
      <nav className="navbar">
        <ul className="nav-list">
          <li className={(currentLesson === 0 ? "nav-item-current " : "") + "nav-item"} onClick={() => onSetLesson(0)}>
            <button className="nav-btn" href="#">Home</button>
          </li>
          <li className={(currentLesson === 1 ? "nav-item-current " : "") + "nav-item"} onClick={() => onSetLesson(1)}>
            <button className="nav-btn" href="#">Lesson 1</button>
          </li>
          <li className={(currentLesson === 2 ? "nav-item-current " : "") + "nav-item"} onClick={() => onSetLesson(2)}>
            <button className="nav-btn" href="#">Lesson 2</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
