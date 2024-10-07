// Articles.js
import React from 'react';
import './Articles.css';
import Articless from './Articlesdata';
import { Link } from 'react-router-dom';
import Moredetailles from "./Moredetailles";

function Articles() {
  return (
    <div className='klch'>
      {Articless.map((article, index) => {
        const { name, data, limage, ladate, limage1,larticle } = article;
        return (
          <div key={index} className='three'>
            <a href={larticle}  target="_blank" >
              <div className='fotota3lwl'>
                <img src={limage} alt="Description de l'image" className='lwl' />
              </div>
              <h2 className='txt1'>{name}</h2>
              <div className='fotota3zawj'>
                <img src={limage1} alt="Description de l'image" className='zawj' />
                <div className='fihtxt'>
                  <h6 className='txt2'>{data}</h6>
                  <h6 className='txt3'>{ladate}</h6>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
