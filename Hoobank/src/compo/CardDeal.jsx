import React from 'react'
import { card } from "../asset";
import './CardDeal.css'

const CardDeal = () => {
  return (
    <section  className='CardDeal'>
    <div className='CardDeald' >
      <h2  className='CardDealh'>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className='CardDealp'>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

    </div>

    <div className='CardDeali'>
      <img src={card} alt="billing" className="CardDealimg" />
    </div>
  </section>
  )
}

export default CardDeal