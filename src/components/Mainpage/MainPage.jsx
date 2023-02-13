import React from "react";
// Css
import "./MainPage.css";
// Components
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Aside />
        <Main />
      </div>
    </div>
  );
}
