import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavContainer, Brand, NavLinks, StyledLink } from './Nav.style'

const Nav = () => {
  return (
    <NavContainer>
      <Brand>
        <NavLink to="/">
          "VANS"
        </NavLink>
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