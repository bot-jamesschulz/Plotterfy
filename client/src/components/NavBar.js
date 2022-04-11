import { Link } from 'react-router-dom'
import { StyledNav, NavContainer, Logo, Pages } from './styles/Navbar.styled'

function NavBar() {

    return (
      <NavContainer>
        <StyledNav>
          <Link as={Link} to="/">
                <Logo src='/logo.svg' alt=''/>
          </Link>
          <Pages>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/top-songs'>Songs</Link>
            </li>
            <li>
              <Link to='/artist-guesser'>Guess</Link>
            </li>
          </Pages>
        </StyledNav>
      
      </NavContainer>

    );
  }
  export default NavBar;
  