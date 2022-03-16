import {Link} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {

  return (
    <div>
    <Container >
      <Navbar className="justify-content-center fs-5" sticky="top">
    
      <Navbar.Brand  as={Link} to="/">
      <img
      src="/logo.svg"
      width="90"
      height="90"
      className="d-inline-block align-top"
      alt=""
    />
      
      </Navbar.Brand>
        <Nav >
        <Nav.Link as={Link} to="/top-songs">Top Songs</Nav.Link> 
        <Nav.Link as={Link} to="/recommendations">Recommendations</Nav.Link> 
        <Nav.Link as={Link} to="/artist-guesser">Popularity Guesser</Nav.Link>
        </Nav>
    
      </Navbar>
    </Container> 
    </div>
  );
}
export default NavBar;
