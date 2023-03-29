// Packages
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// Css
import './App.css'
// Components
import MainPage from "./components/Mainpage/MainPage.jsx"

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><a href="/course" style={{position: "absolute", top: "50%", left:"50%", translate: "-50% -50%", fontSize: "2rem"}}>Click</a></>} />
      {/* course */}
      <Route path="course" element={<MainPage/>} />
      <Route path="/course?module=" element={<MainPage/>} />
      {/* <Route path="/lesson?lesson=" element={<MainPage/>} /> */}



    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
