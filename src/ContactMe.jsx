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
        console.log(event.target.value)
    }

    // 1. with useFormik hook create the object for form validation and submimssion
    // 2. create an object with the reference to the hook created values
    // or is it possible to pass some props into the formik object?
    
    return (
        <Form onSubmit={handleSubmit}>
            <FloatingLabelField label="Your name" type="text" />
            <FloatingLabelField label="Your email" type="email" />
            <FloatingLabelField label="Your message" type="textarea" />
            <Button type="submit">Send the message</Button>
        </Form>
    );
};

const FloatingLabelField = ({label, type}) => {

    return (
        <FloatingLabel label={label} className="mb-3">
                <Form.Control type={type} placeholder={label} style={type === "textarea" ? { height: "200px" } : {}}/>
        </FloatingLabel>
    )
}