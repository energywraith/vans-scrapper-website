import { createGlobalStyle } from 'styled-components'

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
`