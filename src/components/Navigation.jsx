import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faFilm, faTh, faClipboardList } from '@fortawesome/free-solid-svg-icons'

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
            <a href="#Home" className="nav-link nav-brand-name">Home</a>
          </li>
          <li className={(currentLesson === 1 ? "active " : "") + "nav-item"} onClick={() => setLesson(1)}>
            <FontAwesomeIcon icon={faFilm} size={'2x'} />
            <a href="#Movies" className="nav-link">Movies</a>
          </li>
          <li className={(currentLesson === 2 ? "active " : "") + "nav-item"} onClick={() => setLesson(2)}>
            <FontAwesomeIcon icon={faTh} size={'2x'} />
            <a href="#TicTacToe" className="nav-link">TicTacToe</a>
          </li>
          <li className={(currentLesson === 3 ? "active " : "") + "nav-item"} onClick={() => setLesson(3)}>
            <FontAwesomeIcon icon={faClipboardList} size={'2x'} />
            <a href="#Todo" className="nav-link">Todo</a>
          </li>
          <li className={"nav-item nav-toggle icon"} onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={faBars} size={'2x'} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
