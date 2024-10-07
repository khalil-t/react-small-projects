// Checkbox.js
import React, { useState } from 'react';
import './checkbox.css';
import Check from './Checkboxes';
function Checkbox() {
 
  return (
<div className='llcheck'>
  {Check.map((field) => {
    const { name } = field;
    return (
      <div key={name}> {/* Adding a unique key for each item */}
        <label className='lbel'>
          <input
            type="checkbox"
            className='linput'
            value="one"
          />
          <div className='letxt'>
            {name}
          </div>
        </label>
      </div>
    );
  })}
</div>

  );
}

export default Checkbox;
