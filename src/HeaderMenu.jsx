import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function HeaderMenu() {

    const navLinkProps = [{
        href: "/aboutme",
        contentText: "Home",
    },{
        href: "/projects",
        contentText: "Projects",
    },{
        href: "contactme",
        contentText: "Contact me",
    }
];

    return (
        <Navbar collapseOnSelect expand="sm" bg='secondary' variant='dark'>
            <Container fluid>
                <Navbar.Brand href='/aboutme'>
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
                        {navLinkProps.map(
                            props => <Nav.Link href={props.href} >{props.contentText}</Nav.Link>
                            )}                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
};