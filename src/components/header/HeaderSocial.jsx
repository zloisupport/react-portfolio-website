import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {DiGithubBadge} from 'react-icons/di'
import {FaDribbble} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
   <div className="header__socials">
       <a href='https://likedn' target="_blank"><BsLinkedin/></a>
       <a href='https://github.com' target="_blank" title='Мой github'><DiGithubBadge/></a>
       <a href='https://likedn' target="_blank"><FaDribbble/></a>

   </div>
  )
}
 
export default HeaderSocial