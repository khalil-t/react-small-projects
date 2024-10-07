import React, { useState } from 'react';
import './checkbox.css';
import Check from './Checkboxes';
import './Endcss.css';
import Endsvg from './Endsvg.svg';

function End() {
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [message, setMessage] = useState('Message');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="App1" id='ContactUs'>
      <img src={Endsvg} alt="Description de l'image" className='Endimg' />
      <div className="App2">
        <h1 className='thetitle'>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              className='ta3name'
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              className='ta3name'
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              value={message}
              required
              className='ta3txtearea'
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <button type="submit">Contact</button>
        </form>
      </div>
    </div>
  );
}

export default End;
