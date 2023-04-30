import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';

function SearchPage(props) {
  function searchName(name) {
    alert(`You searched for ${name}!`);
    const storedCharacters = sessionStorage.getItem('characters');
    const characters = JSON.parse(storedCharacters);
    console.log(characters.data);
    characters.data.map(({ fullName }) => {
      if (name === fullName) alert(`There was a match for ${name}!`);
      return fullName;
    });
  }

  return (
    <Container>
      <h1>Character Search</h1>
      <SearchBar searchName={searchName} />
    </Container>
  );
}

export default SearchPage;
