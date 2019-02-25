import React from 'react'
import { About } from '../About'
import { Projects } from '../Projects'
import { Writing } from '../Writing'
import { Resume } from '../Resume'
import './index.scss'

export const Main = props => {
  return (
    <main>
      <About />
      <Projects />
      {/* <Writing /> */}
      <Resume />
    </main>
  )
}
