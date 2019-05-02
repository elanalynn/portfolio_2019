import React from 'react'
import booklub from '../../assets/booklub.png'
import til from '../../assets/til.png'
import github from '../../assets/github.png'
import link from '../../assets/link.png'
import './index.scss'

export const Project = props => {
  return (
    <div className="project">
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <a href={props.githubUrl} target="_blank"><img className="icon" src={github} alt="GitHub"/></a>
        <a href={props.liveUrl} target="_blank"><img className="icon" src={link} alt="Live Project Link"/></a>
      </div>
    </div>
  )
}
