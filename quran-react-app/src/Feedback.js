import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import { DataProvider } from './Header.js'; // Import DataProvider
import Sidebare from './Sidebare.js'
import './Feedback.css'
function Feedback() {
  return (
   <>
       <DataProvider>
        <Sidebare/>
<Header/>

<div className='feedback'>
<div className='feedback1'>
<h1 className='lgive'>Give your feedback</h1>
<div className='feedback2'>
    <input></input>
    <button className='feedback3'> Send</button>
</div>
</div>


</div>



<Footer/>
    </DataProvider>

</>
  );
}

export default Feedback;