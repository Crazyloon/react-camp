import React, { useState } from "react";
import "./App.css";
import { Gallery } from "./components/Gallery";
import { Navigation } from "./components/Navigation";
import { LessonSelecter } from "./components/LessonSelecter";
import { TikTakToe } from "./components/TikTakToe";
import { TodoPage } from "./components/TodoPage";

const App = () => {
  const [lesson, setLesson] = useState(0);
  const renderCurrentLessonComponent = () => {
    switch (lesson){
      case 1: 
        return <Gallery />
      case 2:
        return <TikTakToe />
      case 3:
        return <TodoPage />

      
      default:
        return <LessonSelecter onSetLesson={setLesson} />

    }
  }

  return (
    <>
      <Navigation currentLesson={lesson} 
        onSetLesson={setLesson}/>
      {renderCurrentLessonComponent()}

    </>
  );
};

export default App;
