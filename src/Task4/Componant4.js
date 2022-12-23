import React, { useContext } from 'react'
import { UserContext } from './Task4';
export const Componant4 = () => {
    const user = useContext(UserContext);
    return (
        <>
        <h3>Component 4</h3>
        <div className='output'>{`Hello  Again ${user} `}</div>
      </>
    )
  }
  