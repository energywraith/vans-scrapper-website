import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 0px 1px black;
  padding: 0.5em 0;
`

export const Brand = styled.span`
  & > a {
    display: flex;
    align-items: center;
    padding: 1em;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: bold;
    
    @media(max-width: 600px) {
      display: none;
    }
  }
`

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 1em;
  text-align: center;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  color: black;

  @media(max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${StyledLink} {
    color: #808080;

    &.${'is-active'} {
      color: black;
      text-shadow: 0.3px 0.3px 1px black;
    }

    &:hover {
      color: black;
    }
  }
`