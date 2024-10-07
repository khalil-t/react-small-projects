import React from 'react'
import {useState} from 'react'
import {categories } from '../utils/contants'
import './Sidebar.css'
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='Sidebar'>
      
      {
        categories.map((categories)=>(
          <div className={selectedCategory==categories.name? "all" : "allw"}  key={categories.name} onClick={()=>{setSelectedCategory(categories.name)}}>
            <div className='icon'>
{categories.icon}
</div>
<div className='name'>
{categories.name}
</div>







</div>


        ))
      }




    </div>
  )
}

export default Sidebar
//dir new file fih fetch data 
//l headers ykono f .env
//amba3d t importiha w dirlha fetch