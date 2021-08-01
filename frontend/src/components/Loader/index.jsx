import React from 'react'
import { LoaderContainer } from './index.style'
import spinnerSVG from '../../images/spinner_w_bg.svg'

const Loader = () => {
  return (
    <LoaderContainer>
      <img src={spinnerSVG} alt="Loading..." />
    </LoaderContainer>
  )
}

export default Loader
