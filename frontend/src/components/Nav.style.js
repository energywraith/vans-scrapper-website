import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 0px 1px black;
  height: 100%;
  padding: 0.5em 0;
`

export const Brand = styled.span`
  & a {
    font-weight: bold;
    padding: 1em;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
  }

  @media(max-width: 600px) {
    & a {
      display: none;
    }
  }
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;

  /* & li:nth-child(2) {
    margin-left: auto;
  } */

  @media(max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    & li {
      text-align: center;
      padding: 1em 0;

      & a {
        padding: 1.5em;
      }
    }
  }
`

export const StyledLink = styled(NavLink)`
  color: #808080;
  padding: 2em;

  &:hover {
    color: #242424;
  }
  
  &.${props => props.activeClassName} {
    text-shadow: 0px 0px 1px black;
    color: black;
  }

  @media(max-width: 600px) {
    padding: 0;
  }
`;