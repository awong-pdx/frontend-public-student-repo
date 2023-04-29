import Container from 'react-bootstrap/container';
import Form from 'react-bootstrap/form';
function Search() {
  return (
    <Container>
      <Form.Label htmlFor="inputSearch">Search</Form.Label>
      <Form.Control
        type="text"
        id="inputSearch"
        aria-describedby="searchHelpBlock"
      ></Form.Control>
      <Form.Text id="searchHelpBlock" muted>
        Enter the name of a character to search for.
      </Form.Text>
    </Container>
  );
}

export default Search;
