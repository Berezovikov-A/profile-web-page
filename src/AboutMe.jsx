import ProfilePhoto from "./assets/ProfilePhoto.jpg"
import WorkplaceIcon from "./assets/office-business-work-workplace-home-company-svgrepo-com.svg"
import LocationIcon from "./assets/location-svgrepo-com.svg"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

export default function AboutMe() {
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
                    <Col>
                        <h1>About me</h1>
                    </Col>
                </Row>
            </Container>
       </div>
    )
}