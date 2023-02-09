import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div id='header'>
        <Link to={"/course"}>Kurs</Link>
    
    </div>
  )
}

export default Header