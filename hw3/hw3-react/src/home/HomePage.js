import Row from 'react-bootstrap/esm/Row';
function HomePage() {
  return (
    <div className="home-page bg-dark">
      <Row className="py-5">
        <h1 className="text-light">Welcome!</h1>
        <h4 className="text-light">
          Please use the navbar to search for a character or view the house
          graph.
        </h4>
      </Row>
    </div>
  );
}

export default HomePage;
