import React, { useState } from 'react'
import { SingleColor } from './SingleColor'
import { Compliment } from './Compliment'
import util from './utils'
import example from './example'
import './main.css';

function App() {
  
  let [color, setColor] = useState('')
  let [error, setError] = useState(false)
  let [list, setList] = useState(example)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let formatedHex = util.formatHex(color.toUpperCase())
    if(formatedHex === false){
      setError(true)
      console.error('error')
    } else {
      let colorsArray = util.getColorsArray(color)
      setError(false)
      setList(colorsArray)    
    }  

  }
  
  return (
    <>
      <div className='container'>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#E27EAE'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </div>
      <div className="container">
      <h2>Primary</h2>
      </div>
      <div className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor key={index} index={index} color={color}/>
          )
        })}
      </div>
      <div className="container">
      <h2>Complimentary</h2>
      </div>
      <div className='colors'>
      {list.map((color, index) => {
          return (
            <Compliment key={index} index={index} color={color}/>
          )
        })}
      </div>
    </>
  );
}

export default App;
