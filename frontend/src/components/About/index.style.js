import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  row-gap: 1em;
  padding-top: 3em;

  & > h4 {
    margin: 0;
  }

  @media(max-width: 600px) {
    padding: 3em 1em;
  }
` 