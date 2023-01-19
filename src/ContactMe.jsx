import { 
    Container, 
    Row, 
    Col, 
} from "react-bootstrap";
import ContactForm from "./components/ContactForm";

export default function ContactMe() {
    return (
        <Container fluid className="mt-4">
            <Row>
                <Col sm={{order:'last'}}>
                    <h1 className="mt-2">Contact me page</h1>
                </Col>
                <Col sm={{order:'first'}}>
                    <h1 className="mt-2">Fill in the form</h1>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

