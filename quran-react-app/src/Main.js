// src/Main.js
import React, { useState, useEffect } from 'react';
import './Main.css';
import Elm from './Elm';
function Main() {
const [data,setdata]=useState([])
const [searchQuery,setsearchQuery]=useState("")
const [filteredSurahs,setfilteredSurahs]=useState([])



useEffect(()=>{

const fetchdata = async()=>{
try{
  const response = await fetch("https://api.alquran.cloud/v1/quran/quran-uthmani");
  const data = await response.json();
  setdata(data.data.surahs);
  setfilteredSurahs(data.data.surahs); 
}
catch(error){
  console.error("Error fetching data:", error);
}

}
fetchdata();
},[])


useEffect(()=>{
  setfilteredSurahs(
    data.filter((surah) =>
      surah.englishName.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );


},[searchQuery,data])

const handleSearchInputChange=(e)=>{

  setsearchQuery(e.target.value)
}



  return (
    <main>
      <img
        width="80"
        height="80"
        src="https://img.icons8.com/dotty/80/FFFFFF/mosque.png"
        alt="mosque"
        className='immg'
      />

      <input
        type="text"
        name="query"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      <Elm surahs={filteredSurahs} />
    </main>
  );
}

export default Main;
