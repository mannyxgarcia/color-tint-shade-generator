import React, { useState, useEffect } from 'react'
import './main.css';


export const SingleColor = ({index, color}) => {
  return (
    <>
      <div 
        className='color'
        style={{ backgroundColor: `${color.hex}`}}
        >
        {color.hex}
        {color.primary ? 'Primary!' : null}
        <br></br>
        {color.hsl}
      </div>
    </>
  )
}
