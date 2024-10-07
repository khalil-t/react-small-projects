import React from 'react';
import './Aboutus.css';
import buttons from './buttons';
import Aboutuss from './Aboutuss.Svg'

function Aboutus() {
  return (
 <div className='main1' id='AboutUs'>
<div className='ta3txt'>  
<h5>
About us
</h5>
<h2>
    We scrap the web to keep  you up-to-date
</h2>
<p>Our team of experts curates high-quality articles covering a wide array <br/> 
of topics, from programming languages to cutting-edge technologies. <br/> 
Whether you're a beginner or an experienced developer, we offer valuable resources <br/> 
to help you stay ahead in the rapidly evolving IT landscape. Join our inclusive community <br/> 
and embark on a journey of learning and discovery with IT Blog.</p>


</div>



      <img src={Aboutuss} alt="Description de l'image" className='lwl' />

 </div>
  );
}

export default Aboutus;