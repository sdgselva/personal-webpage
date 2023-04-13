import React from 'react'
import './header.css'
import CTA from './CTA'

const header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Nice to meet you, my name is</h5>
      <h1>Sol Gutierrez</h1>
      <h5 className='text-light'>Software Developer</h5>
      <CTA></CTA>
    </header>
  )
}

export default header