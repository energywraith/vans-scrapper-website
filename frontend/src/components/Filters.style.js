import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  padding: 1em;
  column-gap: 1em;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 1em;
  }
`

export const ClearFilter = styled.button`
  background: 0;
  border: 0;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 1.5);
  }

  img {
    height: 1.5em;
    padding: 0.2em;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 1em;
  }
`