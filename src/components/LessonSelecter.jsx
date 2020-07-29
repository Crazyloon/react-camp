import React from 'react';

export const LessonSelecter = ({onSetLesson}) => {

  return (
    <main className="lesson-selecter">
      <div className="copy-text mt-3">
        <h2 className="mb-2">Welcome to React Camp.</h2>
        <p className="mb-1">Select a Lesson to explore what we've learned so far.</p>
      </div>
      <button onClick={() => onSetLesson(1)} className="btn btn-primary btn-lg">Lesson 1</button>
      <button onClick={() => onSetLesson(2)} className="btn btn-primary btn-lg">Lesson 2</button>
      <button onClick={() => onSetLesson(3)} className="btn btn-primary btn-lg">Lesson 3</button>
    </main>
  )
}