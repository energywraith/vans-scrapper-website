import styled from "styled-components"

export const ListElement = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  box-shadow: 0px 0px 1px black;
  padding: 1em;
  margin-top: 1em;
`

export const PreviewImageContainer = styled.a`
  box-shadow: 0px 0px 1px black;
  align-items: center;

  & img {
    height: 8em;
    width: auto;
    transform: scale(0.9);
    transition: .2s ease-out;

    &:hover {
      transform: scale(1)
    }
  }

  @media (max-width: 600px) {
    display: flex;
  }
`

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1em;

  @media (max-width: 600px) {
    row-gap: 1em;
  }
`

export const Header = styled.h4`
  padding: 0em;
  margin: 0;
  display: flex;
  align-items: center;
  column-gap: 0.5em;
`

export const ToggleFavoriteButton = styled.button`
  height: 2em;
  border: 0;
  box-shadow: 0px 0px 1px black;
  cursor: pointer;
  padding: 0.5em;

  & img {
    width: auto;
    height: 100%;
  }

  &:hover {
    background: ${props => props.isFavorite ? "#eb4034" : "red"};
  }

  background: ${props => props.isFavorite ? "red" : "transparent"};
`

export const SizeList = styled.ul`
  display: flex;
  column-gap: 0.5em;
  flex-wrap: wrap;
  
  & li {
    padding: 0.3em;
    box-shadow: 0px 0px 1px black;
    user-select: none;
  }

  & span {
    color: red;
  }

  @media (max-width: 600px) {
    column-gap: 0;

    & li {
      width: 2em;
      text-align: center;
    }
  }
`

export const PriceTag = styled.span`
  font-size: 1.1em;
`

export const UpdateDate = styled.span`
  font-size: 0.9em;
  color: #8e8e8e;
  font-weight: 100;
`
