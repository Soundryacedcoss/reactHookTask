import React, { useMemo, useState } from 'react'

export const Task6 = () => {
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const incmntOneHandler=()=>{
       setCount(count+1)
    }
    const incmntTwoHandler=(e)=>{
        setCount1(count1+1)
     }
     const oddEven =()=>{
        for (let i = 0; i < 2000000000; i++) {   
            i++;
        }
        if (count%2===0) {
            return "Even";
        }
        else{
            return "Odd";
        }
     }
     const memoFunction=useMemo(()=>oddEven(),[count])
  return (
    <div>
        <h2>Task 6</h2>
        <b>Q6. Make a functional component Parent that has two buttons 'increment 1' and 'increment 2'. Both on click, increment count by one. Along with the value of count, it also displays Odd or Even as per the value of count. Now add a loop inside the event handler of increment 1. This loop loops over a big number like 2000000000 just to introduce delay. Now, if you click on first button the delay in display is obvious but on clicking button 2 it is still there but it should not be there. So find a solution for this.</b>
        <div className='flex'>
        <button onClick={incmntOneHandler} value={count}>increment 1 :{count} </button>
        <p>{memoFunction}</p>
        <button onClick={incmntTwoHandler}>increment 2:{count1}</button>
        </div>
    </div>
  )
}
