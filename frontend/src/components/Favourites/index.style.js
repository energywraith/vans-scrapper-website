import styled from 'styled-components'

export const NoFavorites = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;

  @media(max-width: 600px) {
    display: inline-block;
    padding: 0 1em;
    line-height: 2em;
    text-align: center;  

    & > button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 1px black;
      margin: 1em 0;
    }
  }
`