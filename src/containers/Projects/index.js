import React from 'react'
import { Project } from '../../components/Project'
import { projectData } from './projectData'
import './index.scss'

export const Projects = props => {
  return (
    <section className="projects">
      <h2>Projects.</h2>
      { projectData.map((project, i) => <Project key={`project--${i}`} {...project}/>) }
    </section>
  )
}
