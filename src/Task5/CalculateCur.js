import React, { useContext, useState } from 'react'
import { inputContext } from './Task5'
export const CalculateCur = () => {
    const[buttonValue,setButtonValue]=useState()
    const inputValue=useContext(inputContext)
    const selectItem=useContext(inputContext)
    const [output,setOutput]=useState()
    const ConverHandler=(e)=>{
        setButtonValue(e.target.value)
        var res=inputValue.input1/selectItem.selectItem1
        console.log(res);
        console.log(inputValue.input1);
        if(inputValue.input1===""){
            alert("Please fill the boxes");
        }
        else{
            setOutput(res);
        }
    }
  return (
    <div>
    <button className='button' value={1} onClick={ConverHandler}>Convert</button>
      <p className='output'>Amount is: {output}</p>
    </div>
  )
}
