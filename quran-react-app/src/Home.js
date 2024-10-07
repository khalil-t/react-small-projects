import React from "react";
import './Home.css';
import Header, { DataProvider } from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Sidebare from "./Sidebare";
import SurahDetails from "./SurahDetails";

function Home (){


    return (
      <DataProvider>
      <Header />
      <Sidebare  /> {/* Add the className attribute */}
      <Main />
      <Footer />
    </DataProvider>
    
      );



    
}

export default Home;



