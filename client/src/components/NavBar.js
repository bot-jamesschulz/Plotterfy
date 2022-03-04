import {Link} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {

    return (
      <div>
        <Navbar  bg="dark"  variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/">Expos{"\xe9"} Music</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/top-songs">Top songs</Nav.Link> 
          <Nav.Link as={Link} to="/recommendations">Recommendations</Nav.Link> 
          <Nav.Link as={Link} to="/artist-guesser">Popularity Guesser</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      </div>
    );
  }
  export default NavBar;
  