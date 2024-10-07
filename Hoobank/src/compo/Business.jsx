import React from 'react'
import './Business.css'
import {features} from "../constant"

const FeatureCard = ({ icon, title, content, index }) => (
  <div  className='FeatureCard'>
    <div className='FeatureCardi'>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="FeatureCard1">
      <h4 className="FeatureCardh">
        {title}
      </h4>
      <p className="FeatureCardp">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section className="features" >
    <div className='context'>
      <h2  className='context-t'>
        You do the business, <br className="hidden" /> we’ll handle
        the money.
      </h2>
      <p className='context-p' >
        With the right credit card, you can improve your financial life by <br/>
        building credit, earning rewards and saving money. But with <br/> hundreds
        of credit cards on the market.
      </p>

    </div>

    <div >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business