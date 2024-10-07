import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import { DataProvider } from './Header.js'; // Import DataProvider
import Sidebare from './Sidebare.js'

function About() {
  return (
   <>
       <DataProvider>
        <Sidebare/>
<Header/>
<Footer/>
    </DataProvider>

</>
  );
}

export default About;