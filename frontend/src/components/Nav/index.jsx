import React from 'react'
import { NavContainer, Brand, NavLinks, StyledLink } from './index.style'

const Nav = () => {
  return (
    <NavContainer>
      <Brand>
        <StyledLink to="/">
          "VANS"
        </StyledLink>
      </Brand>
      <NavLinks>
        <li>
          <StyledLink exact={true} activeClassName='is-active' to="/">
            Models
          </StyledLink>
        </li>
        <li>
          <StyledLink activeClassName='is-active' to="/favorites">
            Favorites
          </StyledLink>
        </li>
        <li>
          <StyledLink activeClassName='is-active' to="/about">
            About
          </StyledLink>
        </li>
      </NavLinks>
    </NavContainer>
  )
}

export default Nav