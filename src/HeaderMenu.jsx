import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function HeaderMenu() {
    return (
        <Navbar collapseOnSelect expand="sm" bg='secondary' variant='dark'>
            <Container fluid>
                <Navbar.Brand href='#'>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                    Heading
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Projects</Nav.Link>
                        <Nav.Link href="#">Contact me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
};