import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';

function SearchPage(props) {
  const { characters: storedCharacters } = props;
  const [results, setResults] = useState([]);
  const characterMatches = results.map((character) => (
    <div className="character-container p-3">
      <Figure id={`img-${character.id}`} className="bg-white p-2">
        <FigureImage
          fluid="false"
          width={'250px'}
          height={'300px'}
          src={character.imageUrl}
          alt={`A portrait of ${character.fullName}`}
        ></FigureImage>
        <FigureCaption>{character.fullName}</FigureCaption>
        <small className="d-block">{character.title}</small>
      </Figure>
    </div>
  ));

  function searchName(name) {
    const characters = [...storedCharacters];

    setResults([
      ...characters.filter((character) =>
        character.fullName.toLowerCase().includes(name.toLowerCase()),
      ),
    ]);
  }

  return (
    <Container>
      <Container className="character-search">
        <h1>Character Search</h1>
        <SearchBar searchName={searchName} setResults={setResults} />
      </Container>
      <div className="character-match-container mt-2 bg-dark d-flex flex-wrap justify-content-center p-3">
        {characterMatches};
      </div>
    </Container>
  );
}

export default SearchPage;
