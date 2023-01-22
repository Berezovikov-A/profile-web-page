import ProfilePhoto from "./assets/ProfilePhoto.jpg";
import { 
    Container, 
    Row, 
    Col, 
    Card, 
    Tab, 
    Nav 
} from "react-bootstrap";
import { useTheme } from "./ModeContext";

export default function AboutMe() {

    const { theme } = useTheme();

    const darkProps = {
        bg: "secondary",
        className: "text-light",
        border: "light",
    }

    return (
        <div className="mt-4" >
            <Container fluid>
                <Row >
                    <Col sm={5} md={4} lg={3}>
                        <Card {...(theme === "dark" && { ...darkProps })}>
                            <Card.Img variant="top" src={ProfilePhoto} />
                            <Card.Body>
                                <Card.Title>Alexey Berezovikov</Card.Title>
                            </Card.Body>
                            <Card.Body>
                                <Card.Text>Data Analyst at Rating ltd</Card.Text>
                                <Card.Text>Oskemen, Kazakstan</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={theme === "dark" && "bg-dark"}>
                        <h1>About me</h1>
                        <BioCard  />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const BioCard = () => {

    const { theme } = useTheme();

    const darkActiveTab =                    
        <style type="text/css">
            {`
                .nav-tabs .nav-link.active{
                    background-color: #212529;
                    border-bottom-color: #212529;
                }
            `}
        </style>

    const darkProps = {
        bg: "dark",
        className: "text-light",
        border: "light",
    }
    
    const tabProps = [{
        key: "sum",
        eventKey: "summary",
        title: "Summary",
        children: ["A highly motivated and resourceful specialist with experience in installing and servicing computers, peripherals, and other electronic equipment. Possesses an aptitude for acquiring new skills quickly and a capacity to work efficiently without supervision. Proven ability to adapt to changing situations while meeting tight deadlines without compromising quality."],
    }, {
        key: "exp",
        eventKey: "experience",
        title: "Experience",
        children: [
            <h5 key="j2">Data Analyst at Rating Ltd., Oskemen 
            </h5>,
            <p key="d2">Aug 2022 - present</p>,
            <ul key="l2">
                <li key="s2.1">In the first year of work created 4 dashboards on common civil issues, which helped discover insights pleasing the stakeholders.</li>
                <li key="s2.2">Created one of the firs predictive ML models, widenning the list of companies services</li>
            </ul>,
            <h5 key="j1">User Support Specialist at East Kazakhstan Humanitarian College, Oskemen 
            </h5>,
            <p key="d1">Sep 2009 - Aug 2012</p>,
            <ul key="l1">
                <li key="s1">Developed a method to detect and remove common malware, which led to an increase of the department's efficiency;</li>
                <li key="s2">Set up and maintained the companies own printing room leading to a decrease in expenditure.</li>
            </ul>,
        ],
    }, {
        key: "edu",
        eventKey: "education",
        title: "Education",
        children: [
            <h5 key="u1">Sarsen Amanzholov East Kazakhstan State University, Oskemen — Bachelor of Education in Computer Science
            </h5>,
            <p key="d1">Sep 2013 - Jun 2015</p>
            ]
    }];

    return (
        <div className="mb-4">
            <Tab.Container defaultActiveKey="summary">
                <Card {...(theme === "dark" && {...darkProps})}>
                    <Card.Header className={theme === "dark" && "bg-secondary"}>
                        {theme === "dark" && darkActiveTab}
                        <Nav variant="tabs" >
                            {tabProps.map(({key, eventKey, title}) => 
                                <Nav.Item key={key} >
                                    <Nav.Link eventKey={eventKey} className={theme === "dark" && "text-light"}>{title}</Nav.Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Card.Header>
                    <Card.Body >
                        <Tab.Content>
                            {tabProps.map(({key, eventKey, children}) => 
                                <Tab.Pane key={key} eventKey={eventKey}>{children}</Tab.Pane>                            
                            )}
                        </Tab.Content>
                    </Card.Body>
                </Card>
            </Tab.Container>
        </div>
    );
};