import React from 'react'

import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')}  className={activeNav === '#' ? 'active':''}><AiTwotoneHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><BiUserCircle/></a>
      <a href="#expirence" onClick={()=>setActiveNav('#expirence')}  className={activeNav === '#expirence' ? 'active':''}><AiOutlineBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')}  className={activeNav === '#services' ? 'active':''}><MdOutlineDesignServices/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav