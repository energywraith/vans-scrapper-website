import React from 'react'
import { AboutContainer } from './index.style'

const About = () => {
  return (
    <AboutContainer>
      <h4> Filters and favorites are being saved in your localStorage everytime you make a change. </h4>
      <h4> The data is being refreshed every day at 00:00, it takes around 5 minutes to refresh the database. </h4>
    </AboutContainer>
  )
}

export default About