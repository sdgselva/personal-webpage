import React from 'react'
import './header.css'
import CTA from './CTA'
import IMAGE_MAIN from '../../assets/Main_Image.png'

const header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Nice to meet you, my name is</h5>
        <h1>Sol Gutierrez</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA />
        <div className="ProfilePicture">
          <img src={IMAGE_MAIN} alt="Profile picture of myself" />
          <a href="#contact" className='scroll__down'></a>
        </div>
      </div>
    </header>
  )
}

export default header