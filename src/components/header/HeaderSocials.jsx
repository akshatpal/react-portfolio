import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/akshat-pal-4a023a1bb/" target="_blank"  rel="noreferrer noopener" ><BsLinkedin/></a>
        <a href="https://github.com/akshatpal"  target="_blank"  rel="noreferrer noopener" ><FaGithub/></a>
        <a href="https://www.facebook.com/akshat.pal.71"  target="_blank"  rel="noreferrer noopener" ><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials;