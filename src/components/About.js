import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppAbout() {
  return (
    <section id="about">
      <Container fluid>
      <div className="title-holder">
          <h2>About the Developer</h2>
          <div className="subtitle">About my background, how I entered this industry and my current goals</div>
      </div>
      <br></br>
      <br></br>
      <Row>
        <Col sm={15}>
          <p>My interest in programming likely stemmed from a love of video games and other interactive mediums, leading me to start experimenting with making my own small projects as a teenager with software like RPGMaker VX Ace and Ren'Py(A variant of Python designed to be used to create visual novels). This continued as I grew into a young adult, getting more familiar with basic programming in Python.</p>

          <p>Learning with Persevere has given me a much deeper knowledge of coding and programming that I am excited to apply to new projects, including my own. </p>
        </Col>
      </Row>
      </Container>
    </section>
  )
}