import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>Hi! I'm Yutao Zhu</h1>
              <h2>Computer Science Student</h2>
                <p>3rd year computing science student currently study at Simon Fraser University. </p>
                <p>Currently working at MicroServe as a deployment technician for an 8-month co-op term</p>
                <p>Looking for the next co-op opportunity starting from May 13th, 2024. </p>
                <p>I am open for 4-months term, 8-months term, and 12-month term</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}