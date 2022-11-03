import React from 'react'
import { useState } from 'react'
export const Task1 = () => {
const[count ,setCount]=useState(0);
const butonHandler=()=>{
    setCount(count+1)
}
  return (
    <div>
        <h2>Task 1</h2>
        <b>Q1. Create a Button that counts no of clicks and displays on button itself</b>
        <br /> <br />
        <button className='button' onClick={butonHandler} value={count}>clicked : {count} times</button>
        
    </div>
 
  )

}
