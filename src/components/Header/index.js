import React from 'react'
import { SocialMenu } from '../SocialMenu'
import './index.scss'

export const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <div>
          <h1>Elana Kopelevich</h1>
          <h2>Software Engineer</h2>
        </div>
        <SocialMenu />
      </div>
    </div>
  )
}
