import React, { useState, useEffect } from 'react'
import './main.css';


export const Compliment = ({color}) => {
  return (
    <>
    <div 
      className='color'
      style={{ backgroundColor: `${color.compliment}`}}
      >
      {color.compliment}
      {color.primary ? 'Primary!' : null}
    </div>
  </>
  )
}
