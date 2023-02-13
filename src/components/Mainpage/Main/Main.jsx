// Packages
import React from "react";
import { useLocation } from "react-router-dom";
// css
import "./Main.css";
// data
import data from "../../../data.json";
// Components
import LessonRow from "./LessonRow/LessonRow";

export default function Main() {
  // Get an array of module names from data.json
  let arrayOfText = data.module_name;
  // Get the direcory you are in
  const currentLocation = useLocation();
  // If there is no currentLocation.search(when directory is just "/course" display the first module page)
  if (currentLocation.search == "") {
    currentLocation.search = "1";
  }
  // Get the last character from directory
  let id = currentLocation.search.slice(-1);

  return (
    <div id="main">
      <div className="module-wrapper">
        {/* Displaying module number */}
        <p className="module-num">Module {id}</p>
        {/* Displaying module name */}
        <p className="module-name">{arrayOfText[id - 1]}</p>
      </div>
      <div id="Lessons-wrapper">
        {
          // Creating a loop for creating different number of rows in one module according to the data(gets data from data.json)
          Array.from({ length: data.lesson_number[id - 1] }, (_, i) => (
            <LessonRow lesson_num={i + 1} id={id} key={i} />
          ))
        }
      </div>
    </div>
  );
}
