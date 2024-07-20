import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AppEducation(){
  return (
    <section id="education">
      <Container fluid>
        <div className="title-holder">
          <h2>Education</h2>
          <div className="subtitle">These are some of the certifications I have received</div>
        </div>
          <br></br>
          <br></br>
          <Row>
          <Col sm={6}>
          <ListGroup>
            <ListGroup.Item variant="dark">freeCodeCamp</ListGroup.Item>
            <ListGroup.Item>Responsive Web Design</ListGroup.Item>
            <ListGroup.Item>Front-End Development Libraries</ListGroup.Item>
          </ListGroup>
          </Col>
          <Col sm={6}>
          <ListGroup>
            <ListGroup.Item variant="dark">Persevere</ListGroup.Item>
          </ListGroup>
          </Col>
          </Row>
      </Container>
    </section>
  )
}