import React from "react";
import Lesson from "./Lesson/Lesson";
import "./LessonRow.css";
import data from '../../../../data.json'

export default function LessonRow({lesson_num, id}) {
  let a = "tasks"+id
  return (
    <div id="lesson-row">
      <div id="lesson-info">
        <div id="lesson-header">Dərs {lesson_num}</div>
        <div id="lesson-tasks">
          {
            Array.from({ length: data[a][lesson_num].length}, (_, i)=>(
              <Lesson module_num={a} lesson_num={lesson_num} keys={i} key={i}/>
            ))
          }
          
        </div>
      </div>
    </div>
  );
}
