import Container from 'react-bootstrap/Container';
import SiteNav from './navigation/SiteNav';
import AppRouter from './navigation/AppRouter';
import CharactersRequest from './CharactersRequest';

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Container className="pt-5 mt-1">
        <AppRouter />
        <CharactersRequest />
      </Container>
    </div>
  );
}

export default App;
