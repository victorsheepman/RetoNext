import { ButtonAdd } from '@components/ButtonAdd/ButtonAdd'
import { ButtonCounter } from '@components/ButtonCounter/ButtonCounter'
import { Hero } from '@components/Hero/Hero'
import { NavBar } from '@components/NavBar/NavBar'
import type { NextPage } from 'next'
//Realizado por Victor marquez
const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Hero />
        <figure className='image'>
          <img src="  /nike-blue.png" alt="" />
        </figure>
        <aside className='sidebar'>
          <ul>
              <li className='md-16'>instagram</li>
              <li className='md-16'>linkedn</li>
              <li className='md-16'>facebook</li>
          </ul>
        </aside>
      </div>
      <div className='buttonContainer'>  
        <ButtonCounter />
        <ButtonAdd />  
      </div>
    </>
  )
}

export default Home
