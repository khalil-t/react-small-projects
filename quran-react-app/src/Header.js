// src/Header.js
import React, { useEffect } from 'react';
import "./Header.css"
import '@fortawesome/fontawesome-free/css/all.css';
import Sidebare from './Sidebare';
import  { createContext, useContext, useState } from 'react';




 const DataContext =  createContext();
 export  const useData =()=>useContext(DataContext)

 export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
   <DataContext.Provider value={{ data, setData, isSidebarVisible, toggleSidebar }}>
{children}
</DataContext.Provider>
   
  );
};

function Header() {

  const { toggleSidebar, setData,isSidebarVisible } = useData() || {};
  return (
    <header className='header'>
        <div className='h1'> 
     
        <i class="custom-icon1 fa-solid fa-bars" onClick={toggleSidebar}></i>
        
        <p className='htxt'>  
        <i class="custom-icon2 fa-solid fa-book-quran"></i>

         Noble Quran
        </p>

        </div>
   <div className='h2'>
   
    
 
   </div>
     

    </header>
  );
}

export default Header;
