import React from 'react'
import './FeedbackCard.css'
import { quotes } from "../asset";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='FeedbackCard'>
    <img src={quotes} alt="double_quotes"  className='FeedbackCardi' />
    <p className='FeedbackCardp'>
      {content}
    </p>

    <div className='FeedbackCardd'>
      <img src={img} alt={name} className='FeedbackCardimg'/>
      <div className='FeedbackCarddiv'>
        <h4 className='FeedbackCardh' >
          {name}
        </h4>
        <p className='FeedbackCardpa' >
          {title}
        </p>
      </div>
    </div>
  </div>
  )
}

export default FeedbackCard