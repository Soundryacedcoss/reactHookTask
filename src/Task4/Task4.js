import { Componant4 } from './Componant4';
import React, {createContext } from 'react'
import { Componant1 } from './Componant1';
import { Componant2 } from './Componant2';
import { Componant3 } from './Componant3';
export const UserContext=createContext('username')
const username="lucky"
export const Task4 = () => {
  return (
    <div>
        <h2>Task 4</h2>
        <b>Q4. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of useContext hook to perform this.</b>
    <UserContext.Provider value={username}>
        <h1>{`Hello ${username}`}</h1>
        <Componant1/>
        <Componant2/>
        <Componant3/>
        <Componant4/>
    </UserContext.Provider>  
    </div>
  )
}
