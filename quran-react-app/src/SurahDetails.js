// src/SurahDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SurahDetails.css'; // Updated path
import Header from "./Header";
import Footer from './Footer';

import './Home.css';

import Main from "./Main";

import Sidebare from "./Sidebare";
import { DataProvider } from './Header.js'; // Import DataProvider



function SurahDetails() {
  const { number } = useParams();
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {        console.log("ggggggg")

        const response = await fetch(`https://api.alquran.cloud/v1/surah/${number}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSurah(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchSurahs();
  }, [number]);

  if (loading) return <div className='Loading' >Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
    <DataProvider> {/* Wrap the component with DataProvider */}
      <>
        <Header />
        <div className='surahpresentation'>
          <div className='titre'>
            <h1 className='surahname'>{surah.englishName}</h1>
            <p className='nbayahs'>Ayahs: {surah.numberOfAyahs}</p>
          </div>
          {surah.ayahs.map((ayah) => (
            <div key={ayah.number} className='ayat'>
              <p>{ayah.text}</p> {/* Display the text of each ayah */}
            </div>
          ))}
        </div>
        <Footer />
        <Sidebare /> 
      </>
    </DataProvider>
    </>
  );
}

export default SurahDetails;
