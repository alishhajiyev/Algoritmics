import React from "react";
import "./Lesson.css";
import data from "../../../../../data.json";
import star from "../../../../../assets/star.png";
import doc from "../../../../../assets/doc.png";

export default function Lesson({ module_num, lesson_num, keys }) {
  let taskTitle = data[module_num][lesson_num][keys];
  console.log(taskTitle);
  return (
    <div className="lesson">
      <a className="lesson-a" href="">
        <div className="lesson-div">
          {taskTitle.slice(0, 3) == "doc" ? (
            <img
              style={{
                backgroundColor: "none",
                borderRadius: "40px",
                border: "10px rgb(114 120 255) groove",
              }}
              width={"60px"}
              height={"60px"}
              src={doc}
              alt="doc"
            />
          ) : taskTitle.slice(0, 4) === "star" ? (
            <img width={"40px"} height={"40px"} src={star} alt="" />
          ) : (
            lesson_num
          )}
        </div>
        <span className="lesson-title">
          <bdi>
            {taskTitle.slice(0, 3) == "doc"
              ? taskTitle.slice(4)
              : taskTitle.slice(0, 4) === "star"
              ? taskTitle.slice(5)
              : taskTitle}
          </bdi>
        </span>
      </a>
    </div>
  );
}
