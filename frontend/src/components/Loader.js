import React from 'react'
import { LoaderContainer } from './Loader.style'
import spinnerSVG from '../images/spinner.svg'

const Loader = () => {
  return (
    <LoaderContainer>
      <img src={spinnerSVG} alt="Loading..." />
    </LoaderContainer>
  )
}

export default Loader
