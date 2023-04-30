import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';

function SearchPage(props) {
  function searchName(name) {
    alert(`You searched for ${name}!`);
  }

  return (
    <Container>
      <h1>Character Search</h1>
      <SearchBar searchName={searchName} />
    </Container>
  );
}

export default SearchPage;
