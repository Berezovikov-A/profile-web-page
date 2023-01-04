import ProfilePhoto from "./assets/ProfilePhoto.jpg"
import { Container, Row, Col, Image } from "react-bootstrap"

export default function AboutMe() {
    return (
        <div className="mt-4">
            <Container fluid>
                <Row>
                    <Col sm={6} md={4} xl={3} lg={3}>
                        <Image src={ProfilePhoto} fluid roundedCircle thumbnail />
                    </Col>
                    <Col>
                        <h1>About me</h1>
                    </Col>
                </Row>
            </Container>
       </div>
    )
}