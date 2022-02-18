import React from 'react'
import './Button.css'

const Button = ({number,setNumber}) => {

  return (
    <button className='my-btn' onClick={()=> {number === 100 ? setNumber(1) : setNumber(number+1)}}>
      {number === 100 ? 'Restart':'Play'}
    </button>
  )
}

export default Button