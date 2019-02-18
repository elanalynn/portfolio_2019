import React from 'react'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import './index.scss'

export const SocialMenu = props => {
  return (
  <div className="social-menu">
    <a href="https://www.linkedin.com/in/elanalynn/" target="_blank"><img src={linkedin} alt="LinkedIn"/></a>
    <a href="https://twitter.com/elanalynn" target="_blank"><img src={twitter} alt="Twitter"/></a>
  </div>
  )
}