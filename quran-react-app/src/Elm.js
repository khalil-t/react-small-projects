// src/Footer.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Elm.css";
function Elm({surahs}) {
  // State to track if element clicked

 



  return (
    <div className='surahs'>
          <div className='surahscheck'>

      {surahs.map((surah) => (
        <div key={surah.number} className='surah'>
         <Link to={`/surah/${surah.number}`} className='englishName'>
            <div className='englishName11'>
              <div className='englishName1'>{surah.number}</div>
              <div className='englishName2'>{surah.englishName}</div>
            </div>
            <div className='numayah'></div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Elm;
