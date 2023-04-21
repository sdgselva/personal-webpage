import React from 'react'
import './header.css'
import CTA from './CTA'
import IMAGE_MAIN from '../../assets/Main_Image.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Nice to meet you, my name is</h5>
        <h1>Sol Gutierrez</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA />
        <Socials />
        <div className="photo">
          <img src={IMAGE_MAIN} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header