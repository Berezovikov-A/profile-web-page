import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Form from 'react-bootstrap/Form'
import { useTheme } from './ModeContext';

export default function HeaderMenu() {

    const { theme } = useTheme();

    const navLinkProps = [
        {
            props: {
                to: "/",
                key: "aboutme",
            },
            children: "About Me",
        },{
            props: {
                to: "/projects",
                key: "myprojects",
            },
            children: "My Projects",
        },{
            props: {
                to: "/contact-me",
                key: "contactme",
            },
            children: "Contact Me",

        },
    ];

    return (
        <Navbar collapseOnSelect expand="sm" bg={theme === "light" ? "light" : "secondary"} variant={theme === "light" ? "light" : "dark"}>
            <Container fluid>
                <Navbar.Brand href="/">
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
                        {navLinkProps.map(({ props, children}) => 
                            <LinkContainer {...props}>
                                <Nav.Link>{children}</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                    <Switch />
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
};

const Switch = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Form.Switch checked={theme === "light"} onChange={toggleTheme} />
    )
}