import React from 'react'
import { discount, robot } from "../asset";
import GetStarted from "./GetStarted";
import "./Hero.css"
const Hero = () => {
  return (

    <section className="home" >
    <div className='main'>
      <div className='hero' >
        <img src={discount} alt="discount"  />
        <p >
          <span >20%</span> Discount For{" "}
          <span >1 Month</span> Account
        </p>
      </div>

      <div>
        <h1 className='ltxt'>
          The Next <br  />{" "}
          <span>Generation</span>{" "}
        </h1>
        <div className='GetStarted' >
        </div>
      </div>

      <h1 className='Payment'>
        Payment Method.
      </h1>
      <p >
        Our team of experts uses a methodology to identify <br  />the credit cards
        most likely to fit your needs.<br  /> We examine annual percentage rates,
        annual fees.
      </p>
    </div>

    <div className='ddiv' >
      <img src={robot} alt="billing" className='llimg' />

      {/* gradient start */}
      <div className='back1' />
      <div className='back2' />
      <div className='back3' />
      {/* gradient end */}
    </div>

   
  </section>







  )
}

export default Hero