import React, { useState, useEffect } from 'react'
import './main.css';


export const Compliment = ({color}) => {
  const [alert, setAlert] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2500)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <>
    <div 
      className='color'
      style={{ backgroundColor: `${color.compliment}`}}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(color.hex)
      }}
      >
      <div className={color.index < 4 ? 'selected-dark-hex' : 'selected-light-hex'}>
        {color.compliment}
      </div>
      <div className={color.index < 4 ? 'selected-dark' : 'selected-light'}>
        {color.primary ? 'C' : null}
      </div>
      {alert && <div className={color.index < 4 ? 'selected-dark-alert' : 'selected-light-alert'}> copied to clipboard </div>}
    </div>
  </>
  )
}
