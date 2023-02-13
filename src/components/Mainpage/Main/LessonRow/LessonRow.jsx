import React from "react";
// Components
import Lesson from "./Lesson/Lesson";
// Css
import "./LessonRow.css";
// Data
import data from "../../../../data.json";

export default function LessonRow({ lesson_num, id }) {
  // Defining the module number for matching with correct data from data.json
  let a = "tasks" + id;
  return (
    <div id="lesson-row">
      <div id="lesson-info">
        <div id="lesson-header">Dərs {lesson_num}</div>
        <div id="lesson-tasks">
          {
            // Creating a loop for creating different number of tasks in one row according to the data(gets data from data.json)
            Array.from({ length: data[a][lesson_num].length }, (_, i) => (
              <Lesson module_num={a} lesson_num={lesson_num} keys={i} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
