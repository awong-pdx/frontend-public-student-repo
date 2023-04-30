import { useState } from 'react';
import Container from 'react-bootstrap/container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/form';

function SearchBar(props) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // needs better input validation?
    // if (name.length === 0) alert('Please enter a name in the search bar');
    // else props.searchName(name);
    props.setResults([]);
    props.searchName(name);

    setName('');
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputSearch" className="visually-hidden">
          Search
        </Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="text"
            placeholder="Arya Stark"
            id="inputSearch"
            value={name}
            onChange={handleChange}
            aria-describedby="searchHelpBlock"
          ></Form.Control>
          <Form.Text id="searchHelpBlock" className="text-dark">
            Enter the name of a character to search for.
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
