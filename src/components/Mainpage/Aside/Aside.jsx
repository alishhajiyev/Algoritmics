import React from 'react'
import "./Aside.css"
import Module from './Module/Module'
import data from "../../../data.json"
export default function Aside() {
   let arrayOfText = data.module_name
  return (
    <div id='aside'>
        <p className='p'>Kurs</p>
        <p className="heading-p">Web development Azerbaijan 22/23</p>
        <p className="p">Modullar</p>
        {
         
            arrayOfText.map((text, i)=>{
                return <Module text={text} keys={i} key={i}/>
            })
        }
    </div>
  )
}
