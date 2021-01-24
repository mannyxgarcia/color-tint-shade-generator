import React, { useState, useEffect } from 'react'
import './main.css';

export const SingleColor = ({index, color}) => {
  return (
    <>
      <div 
        className='color'
        style={{ backgroundColor: `${color.hex}`}}
        >
        <div className={color.index < 4 ? 'selected-dark-hex' : 'selected-light-hex'}>
          {color.hex}
        </div>
        <div className={color.index < 4 ? 'selected-dark' : 'selected-light'}>
        {color.primary ? 'P' : null}  
        </div>
      </div>
    </>
  )
}
