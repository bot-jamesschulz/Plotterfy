import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem, NavMenuContainer} from './styles/NavMenu.styled'

export default function NavMenu() {
  return (
    <NavMenuContainer>
      <Link as={Link} to="/top-songs">
        <NavItem>
            <div><img src='/fancyNote.svg' alt=''></img></div>
            <div>Top Songs</div>
        </NavItem>
      </Link>
      <Link as={Link} to="/top-artists">
        <NavItem>
        <div><img src='/3Guitar.svg' alt=''></img></div>
            <div>Top Artists</div>
        </NavItem>
      </Link>
      <Link as={Link} to="/artist-guesser">
        <NavItem>
        <div><img src='/qMark.svg' alt=''></img></div>
            <div>Popularity</div>
        </NavItem>   
      </Link>
    </NavMenuContainer>
  )
}
