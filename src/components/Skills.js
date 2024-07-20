import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AppSkills() {
  return (
    <section id="skills">
      <Container fluid>
        <div className="title-holder">
          <h2>Skills</h2>
          <div className="subtitle">These are some of the coding languages and other resources I have learned to use</div>
        </div>
          <br></br>
          <br></br>
          <Col sm={12}>
          <ListGroup>
            <ListGroup.Item variant="danger">HTML: Hyper-Text Markup Language, used to set the content a page displays</ListGroup.Item>
            <ListGroup.Item variant="warning">CSS: Cascading Style Sheet, applied to HTML to affect the way it is displayed</ListGroup.Item>
            <ListGroup.Item variant="success">Javascript: a script-based programming language, used to add interactivity to pages and manage the information it allows the page to take in and display</ListGroup.Item>
            <ListGroup.Item variant="info">React JS: React Javascript, a coding language that effectively combines HTML and Javascript </ListGroup.Item>
            <ListGroup.Item variant="primary">Bootstrap: A compilation of components that can be used to style pages effectively</ListGroup.Item>
            <ListGroup.Item variant="secondary">Redux: A language used to handle state management</ListGroup.Item>
          </ListGroup>
          </Col>
      </Container>
    </section>
  )
}