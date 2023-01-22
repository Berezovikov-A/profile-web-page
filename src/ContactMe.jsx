import { 
    Container, 
    Row, 
    Col, 
} from "react-bootstrap";
import ContactForm from "./components/ContactForm";

export default function ContactMe() {
    return (
        <Container fluid className="mt-4">
            <Row className="mb-4">
                <Col sm={12} md={6}>
                    <h1 className="mt-2">Contact me page</h1>
                    <p>Let me help you get started with creating your web page. Fill out the form and I'll give you a call. I can answer questions, provide more information, and help you understand what React can do for your business.</p>
                </Col>
                <Col>
                    <h1 className="mt-2">Fill in the form</h1>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

