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
      <Route path="course" element={<MainPage/>} />
      <Route path="/course?module=" element={<MainPage/>} />
      {/* <Route path="/lesson?lesson=" element={<MainPage/>} /> */}



    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
