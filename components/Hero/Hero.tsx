import React from 'react'

export const Hero:React.FC = () => {
  return (
    <div className='hero'>
      <h1 className='title'>With Flavors Almost As Rich As Our History</h1>
      <span className='caption'>Salt & vinegar Flavored</span>
      <div className='hero__description'>
        <p className='sm-14'>It all with farm-grown potatoes, cooked and seasoned to perfection. then we add just the right balance of tangy vinegar.</p>    
      </div>
      <h3 className='hero__price'>$150</h3>
    </div>
  )
}
