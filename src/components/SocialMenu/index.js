import React from 'react'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import './index.scss'

export const SocialMenu = props => {
  return (
  <div className="social-menu">
    <a href="https://www.linkedin.com/in/elanalynn/" target="_blank"><img src={linkedin} alt="LinkedIn"/></a>
    <a href="https://twitter.com/elanalynn" target="_blank"><img src={twitter} alt="Twitter"/></a>
    <a href="https://github.com/elanalynn" target="_blank"><img src={github} alt="Github"/></a>
    <a href="https://instagram.com/elanalynnn" target="_blank"><img src={instagram} alt="Instagram"/></a>
  </div>
  )
}