import ProfilePhoto from "./assets/ProfilePhoto.jpg"
import { Container, Row, Col, Image } from "react-bootstrap"

export default function AboutMe() {
    return (
        <div className="m-2">
            <Container>
                <Row>
                    <Col xs={4}>
                        <Image src={ProfilePhoto} fluid roundedCircle thumbnail />
                    </Col>
                    <Col>Bio</Col>
                </Row>
            </Container>
       </div>
    )
}