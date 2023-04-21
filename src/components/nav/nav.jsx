import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineCode} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#portfolio"><AiOutlineCode /></a>
      <a href="#contact"><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav