import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

function SiteNav() {
  return (
    <NavBar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <NavBar.Brand href="/home">Exercise 03-05</NavBar.Brand>
        <NavBar.Toggle aria-controls="=basic-navbar-nav"></NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/houses">Houses</Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default SiteNav;
