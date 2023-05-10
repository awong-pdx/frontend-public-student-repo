import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import SiteNav from './navigation/SiteNav';
import AppRouter from './navigation/AppRouter';
import CharactersRequest from './CharactersRequest';

function App() {
  const [characters, setCharacters] = useState([]);
  CharactersRequest({ setCharacters });
  return (
    <div className="App">
      <SiteNav />
      <Container className="pt-5 mt-5">
        <AppRouter characters={characters} />
      </Container>
    </div>
  );
}

export default App;
