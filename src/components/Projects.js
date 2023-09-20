import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>comming soon</p> */}
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Forget Me Not</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Merchandise Backend Program</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tracker Web Application</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>• Built the Forget Me Not Android application using Android Studio and Java in language, aiming to slow down the progress of Dementia disease.</p>
                      <p>• Conducted research on the benefits of singing for individuals with dementia by reading reports, took advantage to incorporate it into our software.</p>
                      <p>• Designed a user-friendly interface by using big buttons and clickable icons, so our customers will have an easier user experience.</p>
                      <p>• Collaborated with a team of 5 members, utilizing strong teamwork and communication skills, enabled the project workflow smoothly.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>• Made a merchandise backend program in C++, simulated a generic commercial management platform.</p>
                      <p>• Stored information using doubly linked list and BST data structures, they are powerful tools to modify and retrieve information.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>• Developed a web application using the Angular framework to enhance public participation in locating and reporting missing items.</p>
                      <p>• Implemented a user-friendly interface that enabled reporting individuals to submit comprehensive reports with items details.</p>
                      <p>• Provided map function by integrating Leaflet map API into the application, allowing users to select precise locations by clicking on the map.</p>
                      <p>• Incorporated sorting features into the reported items table by quick sort and merge sort, enabling users to organize the data in different orders.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
