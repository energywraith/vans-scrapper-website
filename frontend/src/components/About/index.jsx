import React from 'react'
import { AboutContainer } from './index.style'

import vansLandscape from '../../images/vans.webp'

const About = () => {
  return (
    <AboutContainer>
      <img src={vansLandscape} alt='vans shoes' />

      <div>
        <p>
          The Vans Scrapper Website is a site I created to make my search for 
          skateboarding shoes easier. On the original site some features don't 
          work such as filtering, sometimes even the shoes show up although
          they are not available.
        </p>
        <p>
          The data is updated daily at 
          midnight with the data collected with the scrapper.
        </p>
        <p>
          If you are interested in the code of this page then feel 
          free to
          <a href='https://github.com/energywraith/vans-scrapper-website'> visit the repository. </a>
        </p>
      </div>
    </AboutContainer>
  )
}

export default About