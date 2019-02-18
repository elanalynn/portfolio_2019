import React from 'react'
import { educationData } from './educationData'

export const Education = props => {
  return (
    <section>
    { 
      educationData.map(item => console.log(item))
    }
    </section>
  )
}