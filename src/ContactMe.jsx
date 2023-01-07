import { Container, Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";


export default function ContactMe() {
    return (
        <Container fluid className="mt-4">
            <Row>
                <Col sm={{order:'last'}}>
                    <h1 className="mt-2">Contact me page</h1>
                </Col>
                <Col sm>
                    <h1 className="mt-2">Fill in the form</h1>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Message sent!');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FloatingLabel label="Your name" className="mb-3">
                <Form.Control type="text" placeholder="Your name"/>
            </FloatingLabel>
            <FloatingLabel label="Your email" className="mb-3">
                <Form.Control type="email" placeholder="Your email"/>
            </FloatingLabel>
            <FloatingLabel label="Your message" className="mb-3">
                <Form.Control as="textarea" placeholder="Leave your message" style={{ height: "200px" }} />
            </FloatingLabel>
            <Button type="submit">Send the message</Button>
        </Form>
    );
};