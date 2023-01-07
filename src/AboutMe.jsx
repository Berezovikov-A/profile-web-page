import ProfilePhoto from "./assets/ProfilePhoto.jpg";
import WorkplaceIcon from "./assets/office-business-work-workplace-home-company-svgrepo-com.svg";
import LocationIcon from "./assets/location-svgrepo-com.svg";
import { Container, Row, Col, Card, Image, Tab, Nav } from "react-bootstrap";

export default function AboutMe() {

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col sm={5} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src={ProfilePhoto} />
                        <Card.Body>
                            <Card.Title>Alexey Berezovikov</Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text><Image src={WorkplaceIcon} fluid /> Data Analyst at Rating ltd</Card.Text>
                            <Card.Text><Image src={LocationIcon} fluid /> Oskemen, Kazakstan</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h1>About me</h1>
                    <BioCard />
                </Col>
            </Row>
        </Container>
    );
};

const BioCard = () => {
    
    const tabProps = [{
        key: "sum",
        eventKey: "summary",
        title: "Summary",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
        key: "exp",
        eventKey: "experience",
        title: "Experience",
        children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    }, {
        key: "edu",
        eventKey: "education",
        title: "Education",
        children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }];

    return (
        <Tab.Container defaultActiveKey="summary">
            <Card>
                <Card.Header>
                    <Nav variant="tabs">
                        {tabProps.map(({key, eventKey, title}) => 
                            <Nav.Item key={key}>
                                <Nav.Link eventKey={eventKey}>{title}</Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Tab.Content>
                        {tabProps.map(({key, eventKey, children}) => 
                            <Tab.Pane key={key} eventKey={eventKey}>{children}</Tab.Pane>                            
                        )}
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};