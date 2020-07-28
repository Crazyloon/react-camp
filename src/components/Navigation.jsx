import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faFilm, faTh } from '@fortawesome/free-solid-svg-icons'

export const Navigation = ({currentLesson, onSetLesson}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const setLesson = (i) => {
    onSetLesson(i);
    setMenuOpen(false);
  }

  return (
    <header className="navigation">
      <nav className="navbar">
        <ul className={"nav-list" + (menuOpen ? " responsive" : "")}>
          <li className={(currentLesson === 0 ? "active " : "") + "nav-item-brand"} onClick={() => setLesson(0)}>
            <FontAwesomeIcon icon={faHome} size={'2x'} />
            <a href="#" className="nav-link nav-brand-name">Home</a>
          </li>
          <li className={(currentLesson === 1 ? "active " : "") + "nav-item"} onClick={() => setLesson(1)}>
            <FontAwesomeIcon icon={faFilm} size={'2x'} />
            <a href="#" className="nav-link">Lesson 1</a>
          </li>
          <li className={(currentLesson === 2 ? "active " : "") + "nav-item"} onClick={() => setLesson(2)}>
            <FontAwesomeIcon icon={faTh} size={'2x'} />
            <a href="#" className="nav-link">Lesson 2</a>
          </li>
          <li className={"nav-item nav-toggle icon"} onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={faBars} size={'2x'} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
