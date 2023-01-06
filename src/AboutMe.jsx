import ProfilePhoto from "./assets/ProfilePhoto.jpg"
import WorkplaceIcon from "./assets/office-business-work-workplace-home-company-svgrepo-com.svg"
import LocationIcon from "./assets/location-svgrepo-com.svg"
import { Container, Row, Col, Card, Image, Tab, Nav } from "react-bootstrap"

export default function AboutMe() {

    const dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="mt-4">
            <Container fluid>
                <Row>
                    <Col sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={ProfilePhoto} />
                            <Card.Body>
                                <Card.Title>Alexey Berezovikov</Card.Title>
                            </Card.Body>
                            <Card.Body>
                                <Card.Text><Image src={WorkplaceIcon} fluid /> Data Analyst at Rating ltd</Card.Text>
                                <Card.Text><Image src={LocationIcon} fluid /> Oskemen, Kazakstan</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Tab.Container defaultActiveKey="bio">
                        <Col>
                            <h1>About me</h1>
                            <Card>
                                <Card.Header>
                                    <Nav variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="bio">Summary</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="experience">Experience</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="education">Education</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                <Card.Body>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="bio">{dummy}</Tab.Pane>
                                        <Tab.Pane eventKey="experience">{dummy}</Tab.Pane>
                                        <Tab.Pane eventKey="education">{dummy}</Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Tab.Container>
                </Row>
            </Container>
       </div>
    )
}