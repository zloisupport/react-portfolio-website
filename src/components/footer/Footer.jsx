import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import './footer.css'

 
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Name</a>
      <ul className='permalinks'>
        <li><a href="#"></a>Home</li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>


      <div className="footer__socials">
        <a href="http://">VK</a>
        <a href="http://"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer