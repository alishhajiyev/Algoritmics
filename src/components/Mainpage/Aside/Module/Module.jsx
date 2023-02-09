import React from 'react'
import './Module.css'
import {
  Link,
} from "react-router-dom";
export default function Module({text, keys}) {
  return (
    <Link to={`/course?module=${keys+1}`}><div className='main'>
        <span className='aside-module-name'>{`${keys+1}. ${text}`}</span>
        <div className='progressline'></div>
    </div></Link>
  )
}
