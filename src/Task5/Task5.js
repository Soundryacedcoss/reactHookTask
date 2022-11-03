import React, { createContext, useState } from 'react'
import { CalculateCur } from './CalculateCur'
export const inputContext=createContext()
export const Task5 = () => {
const [input,setInput]=useState() 
const[selectItem,setSelectItem]=useState()
    const inputHandler=(e)=>{
        setInput(e.target.value)
    }
    const SelectHandler=(e)=>{
      setSelectItem(e.target.value)
    }
    var input1=parseInt(input)
    var selectItem1=parseInt(selectItem)
  return (
    <div>
        <h2>Task 5</h2>
        <b>Q5. Make the currency converter you made using context,  now with useContext Hook</b>
        <br />
        <inputContext.Provider value={{input1,selectItem1}} >
        <div className='flex'>  
        <input type="number" placeholder='Enter indian currency' onChange={inputHandler}/>
        <div className="custom-select" >
        <select name="" id="" onChange={SelectHandler} >
          <option>--Choose Here---</option>
          <option value={82.91}>USD</option>
          <option value={93}>GBP</option>
          <option value={80}>EUR</option>
        </select>
        </div>
        </div>
        <CalculateCur/>
        </inputContext.Provider>
    </div>
  )
}
