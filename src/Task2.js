import React from 'react'
import { useState } from 'react'
export const Task2 = () => {
const[count,setCount]=useState(0)
const resethandler=()=>{
    setCount(0)
}
const Decresehandler=()=>{
    setCount(count-1)
}
const increasehandler=()=>{
    setCount(count+1)
}
  return (
    <div>
        <h2>Task 2</h2>
        <b>Q2. Create a counter with increment, decrement and reset functionality.</b>
        <br /><br />
        <div className='output' value="count">{count}</div>
        <button className='button' onClick={Decresehandler}>DECREASE</button>
        <button className='button' onClick={resethandler}>RESET</button>
        <button className='button'  onClick={increasehandler}>INCREASE</button>
    </div>
  )
}
