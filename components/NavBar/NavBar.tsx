import { Cart } from '@components/cart/Cart'
import React from 'react'

export const NavBar:React.FC = () => {
  return (
    <header className='header'>
      <figure className='header__logo'>
        <img src="/logo-nike.png" alt="" />
      </figure>
      <nav className='header__nav'>
        <ul>
          <li className='md-16'>Products</li>
          <li className='md-16'>About us</li>
          <li className='md-16'>Videos</li>
          <li className='md-16'>Where to Buy</li>
          <li className='md-16'>Tasty Rewards</li>
        </ul>  
      </nav> 
      <Cart />
    </header>
  )
}
