import React from 'react'
import CV from '../../assets/Resume Sol Gutierrez.pdf'
const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download>Download CV</a>
        <a href="#contact">Contact me!</a>
    </div>
  )
}

export default CTA