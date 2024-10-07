import React, { useState } from 'react';
import "./Footer.css";

function Footer() {
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [message, setMessage] = useState('Your Message');



  return (
    <footer>
      <div className='letxt'>
        <h1>Contact Us</h1>
        <h4>Read, study, and learn The Noble Quran. Quran.com is a Sadaqah Jariyah</h4>
        <p>We hope to make it easy for everyone to read, study, and learn The Noble Quran. The Noble Quran has many names including Al-Quran Al-Kareem, Al-Ketab, Al-Furqan, Al-Maw'itha, Al-Thikr, and Al-Noor.</p>
      </div>

      <div className="formcontainer">
        <form className="contactForm" >
          <h2>Contact Us</h2>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='input1 t'
          />
          
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='input2 t'
          />
          
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className='input3 t'
          ></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
