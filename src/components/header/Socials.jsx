import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Socials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank'><AiFillLinkedin /></a>
      <a href="https://github.com" target='_blank'><AiFillGithub/></a>
      <a href="https://linkedin.com" target='_blank'></a>
    </div>
  )
}

export default Socials