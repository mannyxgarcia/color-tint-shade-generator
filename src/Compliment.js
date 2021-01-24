import React, { useState, useEffect } from 'react'
import './main.css';


export const Compliment = ({color}) => {
  return (
    <>
    <div 
      className='color'
      style={{ backgroundColor: `${color.compliment}`}}>
      <div className={color.index < 4 ? 'selected-dark-hex' : 'selected-light-hex'}>
        {color.compliment}
      </div>
      <div className={color.index < 4 ? 'selected-dark' : 'selected-light'}>
        {color.primary ? 'C' : null}
      </div>
    </div>
  </>
  )
}
