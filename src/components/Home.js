import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


function SkillsSample() {
  return (
    <ListGroup>
      <ListGroup.Item variant="dark">Skills</ListGroup.Item>
      <ListGroup.Item>HTML</ListGroup.Item>
      <ListGroup.Item>CSS</ListGroup.Item>
      <ListGroup.Item>Javscript</ListGroup.Item>
      <ListGroup.Item variant="primary" action href="#link1">
        View More...
      </ListGroup.Item>
    </ListGroup>
  );
}
function ContactsSample() {
  return (
    <ListGroup>
      <ListGroup.Item variant="dark">Contact</ListGroup.Item>
      <ListGroup.Item>ttriplett.prsvr@Gmail.com</ListGroup.Item>
      <ListGroup.Item>(865)-304-0636</ListGroup.Item>
      <ListGroup.Item variant="success" action href="https://github.com/TaraTriplettDev">GitHub</ListGroup.Item>
      <ListGroup.Item variant="primary" action href="#link2">
        View More...
      </ListGroup.Item>
    </ListGroup>
  );
}


export default function AppHome() {
  return (
    <section id="home">
      <Container fluid>
        <div className="title-holder">
          <h2>Welcome to my Portfolio!</h2>
          <div className="subtitle">I am Tara Bell, a Full-Stack student under the Persevere program with an interest in web and software development.</div>
        </div>
        <br></br>
        <br></br>
        <Row>
          <Col sm={6}>
            <SkillsSample />
          </Col>
          <Col sm={6}>
            <ContactsSample />
          </Col>
        </Row>
      </Container>
    </section>
  )
}