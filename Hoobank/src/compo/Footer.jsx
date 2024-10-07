import React from 'react'
import { logo } from "../asset";
import { footerLinks, socialMedia } from "../constant";
import "./Footer.css"
const Footer = () => {
  return (
    <section className='Footer'>
   
      <p className='Footerp'>
        Copyright Ⓒ   2022 HooBank. All Rights Reserved.
      </p>

      <div className='Footerdiv' >
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
    </div>
  </section>
  )
}

export default Footer