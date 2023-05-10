import HouseChart from './HouseChart';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';

function HousesPage(props) {
  return (
    <Container>
      <h1>Houses</h1>
      <Row>
        <HouseChart characters={props.characters}></HouseChart>
      </Row>
    </Container>
  );
}

export default HousesPage;
