import React, { useState } from 'react'
export const Task7 = () => {
    const[input,setInput]=useState("")
    const[FirstSuccessors,setFirstSuccessors]=useState()
    const[SeccondSuccessors,setSeccondSuccessors]=useState()
    const[themeButton,setThemeButton]=useState(true)
const[DivTheme,setDivTheme]=useState()
    const InputHandler=(e)=>{
        setInput(parseInt(e.target.value))
    }
    const FindSuccessor=()=>{
        console.log(input );
        if(input===""){
            alert("plese give some value")
        }
        else{
            setFirstSuccessors(parseInt(input+1));
            setSeccondSuccessors(parseInt(input+2));
        }
        
    }
    const ThemeHandler=(e)=>{
        setThemeButton(e.target.button)
        if(themeButton){
            setDivTheme({backgroundColor:"black"})
            setThemeButton(false)
        }
        else {
            setDivTheme({backgroundColor:"lightgray"})
            setThemeButton(true)
        } 
    }
  return (
    <div>
        <h2>Task 7</h2>
        <b>Q7. a. Create the app as shown using useMemo hook. On changing the number inside the textbox, the number and its next two successors must be printed. On click of Toggle theme, the theme must change.b. Create the same app using useCallback hook.</b>
        <br /><br />
        <input type="Number" onChange={InputHandler} />
        <p className='output'>First Successor is:{FirstSuccessors}</p>
        <p className='output'>Second Successor is:{SeccondSuccessors}</p>
      <button className='button' onClick={FindSuccessor}>Successor</button>
      
      <div className='ThemeDiv' style={DivTheme}></div>
      <button className='button' onClick={ThemeHandler} >Theme</button>
    </div>
  )
}
