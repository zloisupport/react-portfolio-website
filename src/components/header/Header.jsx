import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.gif'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h5>Привет я</h5>
       <h1> Zloisupport</h1>
       <h5 className="text-light">Junior Developer</h5>

        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
  
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>

     </div>
   </header>
  )
}

export default Header