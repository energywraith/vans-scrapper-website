import styled from "styled-components"

export const ListElement = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15em repeat(4, auto);
  box-shadow: 0px 0px 2px gray;
  padding: 1em 0;
  row-gap: 1em;

  transition: opacity 300ms;
`

export const ThumbnailImage = styled.img`
  transform: scale(0.9);
  width: auto;
  height: 15em;
`

export const Thumbnail = styled.a`
  padding: 2em;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${ThumbnailImage} {
    transform: scale(1)
  }
`

export const Name = styled.a`
  justify-self: center;
  font-size: 1.1em;
  width: fit-content;
  text-align: center;

  &:hover {
    color: #b3b3b3;
  }
`

export const SizeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 0.5em;
  column-gap: 1em;
  font-weight: 600;
  padding: 0 1em;
`

export const Price = styled.span`
  text-align: center;
`

export const FavouritesButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0;
  width: fit-content;
  justify-self: center;

  & > img {
    height: 1.5em;
    width: auto;

    ${props => props.isFavourite && 'filter: invert(0.5) sepia(1) saturate(113) hue-rotate(363deg);'}
  }

  &:hover > img {
    filter: invert(0.5) sepia(1) saturate(113) hue-rotate(363deg);
  }

  @media(max-width: 600px) {
    box-shadow: 0px 0px 1px black;
    margin: 0em 1em;
    padding: 0.5em;
    width: 100%;
  }

  &:active > img {
    filter: invert(0.5) sepia(1) saturate(113) hue-rotate(363deg) brightness(0.5);
  }
`