import React from 'react'
import { apple, bill, google } from "../asset";
import './Billing.css'
const Billing = () => {
  return (
    <section className="product" >
   
      <img src={bill} alt="billing"  className='imgp' />

      {/* gradient start */}
      {/* gradient end */}
    

    <div className='productd' >
      <div className='productk'>
      <h2  className='producth'>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className='productp' >
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div  className='productimg'>
        <img src={apple} alt="google_play"  />
        <img src={google} alt="google_play"  />
      </div>
    </div>
    </div>
  </section>
  )
}

export default Billing