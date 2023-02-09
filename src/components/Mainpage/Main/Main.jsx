import React from "react";
import "./Main.css";
import data from "../../../data.json";
import { useLocation } from "react-router-dom";
import LessonRow from "./LessonRow/LessonRow";
export default function Main() {
  let arrayOfText = data.module_name;
  const currentLocation = useLocation();
  if (currentLocation.search == "") {
    currentLocation.search = "1";
  }
  let id = currentLocation.search.slice(-1);

  return (
    <div id="main">
      <div className="module-wrapper">
        <p className="module-num">Module {id}</p>
        <p className="module-name">{arrayOfText[id - 1]}</p>
      </div>
      <div id="Lessons-wrapper">
        {Array.from({ length: data.lesson_number[id - 1] }, (_, i) => (
          <LessonRow lesson_num={i + 1} id={id} key={i} />
        ))}
      </div>
    </div>
  );
}
