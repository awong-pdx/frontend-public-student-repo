import HouseChart from './HouseChart';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';

function HousesPage() {
  return (
    <Container>
      <h1>Houses</h1>
      <Row>
        <HouseChart></HouseChart>
      </Row>
    </Container>
  );
}

export default HousesPage;
