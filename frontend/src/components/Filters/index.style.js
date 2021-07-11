import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding: 1em;
  column-gap: 1em;

  & > div {
    flex-grow: 1;
    flex-basis: 33%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: 1em;
  }
`

export const ClearFilter = styled.button`
  background: 0;
  cursor: pointer;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;

  & > img {
    height: 1.5em;
    padding: 0 0.5em;
  }

  &:hover {
    border: 1px solid hsl(0, 0%, 70%);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 1em;
    padding: 0.5em;
  }
`