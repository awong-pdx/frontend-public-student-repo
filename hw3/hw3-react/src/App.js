import './App.css';
import Container from 'react-bootstrap/Container';
import SiteNav from './SiteNav';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Container className="pt-5 mt-1">
        <AppRouter />
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </Container>
    </div>
  );
}

export default App;
