import React, { useContext } from 'react'
import { appContext } from '@context/context'
export const ButtonAdd = () =>{
    const { addProduct } = useContext(appContext)
 
    return(
        <button className='buttonAdd' onClick={addProduct}>ButtonAdd</button>
    )
}
