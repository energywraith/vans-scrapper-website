import { createGlobalStyle } from 'styled-components'
// Fonts
import Rubik from './fonts/Rubik-Light.ttf'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Rubik';
    overflow-y: scroll;
  }

  & a {
    text-decoration: none;
    color: black;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Rubik';
    src: url(${Rubik}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`