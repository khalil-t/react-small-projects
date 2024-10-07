import React from 'react';
import './Footer.css';
import logo from './logo.Svg';
import fac from './footerimg/fac.Svg'
import Insta from './footerimg/Insta.Svg'
import linkdin from './footerimg/linkdin.Svg'
import twitter from './footerimg/twitter.Svg'

function Footer() {
    return (
    <div className='lfooter'>
            <img src={logo} alt="Logo" className='lmg' />
            <p>© 2024 Micro Club ∙ All Rights Reserved</p>
      <div className='icones'>
      <img src={fac} alt="Logo" className='lmg' />
      <img src={Insta} alt="Logo" className='lmg' />
      <img src={linkdin} alt="Logo" className='lmg' />

      <img src={twitter} alt="Logo" className='lmg' />


      </div>



    </div>
    );
  }
  export default Footer ;