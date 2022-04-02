
import React, { useContext } from 'react'
import { appContext } from '@context/context'
export const ButtonCounter:React.FC = () => {
  const { number, setNumber } = useContext(appContext);
  return (
    <div className='counter'>
        <button onClick={()=>setNumber(number-1)} disabled={number <= 0}>-</button>
        {number}
        <button onClick={()=>setNumber(number+1)}>+</button>
    </div>
  )
}
