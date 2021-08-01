import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const ListContainer = styled.ul`
    display: grid;
    justify-content: center;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 20em);
    grid-gap: 1em;
    padding: 1em;

    @media(max-width: 600px) {
      grid-template-columns: 1fr;
    }

    @media(min-width: 1600px) {
      grid-template-columns: repeat(5, 1fr);
    }
`

export const CountInfo = styled.span`
  color: #989898;
  text-align: center;
  padding-bottom: 1em;
`