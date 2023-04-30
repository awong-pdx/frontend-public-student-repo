import { useState } from 'react';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';

function SearchPage() {
  const [results, setResults] = useState([]);
  const characterMatches = results.map((character) => (
    <Col>
      <Figure id={`img-${character.id}`} className="bg-white p-2">
        <FigureImage
          width={'250px'}
          height={'300px'}
          src={character.imageUrl}
          alt={`A portrait of ${character.fullName}`}
        ></FigureImage>
        <FigureCaption>{character.fullName}</FigureCaption>
        <small className="d-block">{character.title}</small>
      </Figure>
    </Col>
  ));

  function searchName(name) {
    // this isn't working
    setResults([]);
    alert(`You searched for ${name}!`);
    const storedCharacters = sessionStorage.getItem('characters');
    const characters = JSON.parse(storedCharacters);
    console.log(characters.data);

    characters.data.map((character) => {
      if (name.toLowerCase() === character.fullName.toLowerCase()) {
        alert(`There was a match for ${name}!`);
        setResults([...results, character]);
      }
      //what:
      return true;
    });
  }

  return (
    <Container>
      <Container>
        <h1>Character Search</h1>
        <SearchBar searchName={searchName} setResults={setResults} />
      </Container>
      <Container>
        <div className="character-match-container mt-2 bg-dark">
          <Row className="py-4">{characterMatches}</Row>
        </div>
      </Container>
    </Container>
  );
}

export default SearchPage;
