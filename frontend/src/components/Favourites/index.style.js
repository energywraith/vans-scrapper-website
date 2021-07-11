import styled from 'styled-components'

export const NoFavorites = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding-top: 2em;
  column-gap: 0.5em;

  @media(max-width: 600px) {
    display: inline-block;
    padding: 1em;
    line-height: 2em;

    & > button {
      margin: 0 1em;
    }
  }
`