import React from "react";
import "./MainPage.css";
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
