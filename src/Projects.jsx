import { Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ProjectOne from './assets/project_one.png';
import ProjectTwo from './assets/project_two.png';
import ProjectThree from './assets/project_three.png';


export default function Projects() {
    return (
        <Container fluid >
            <ProjectSlides />
        </Container>
    )
}


const ProjectSlides = () => {
    
    const carouselProps = [{
        src: ProjectOne,
        children: "Web pages for your business",
    },{
        src: ProjectTwo,
        children: "React web apps with complex logic",
    },{
        src: ProjectThree,
        children: "Multi-paged React web apps",
    }];

    return (
                <Carousel>
                    {carouselProps.map(({src, children}) =>
                        <Carousel.Item key={children}>
                                <Image
                                fluid
                                src={src}
                                alt={children}
                                />                                
                            <Carousel.Caption style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
                                <h3 >{children}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>)}
                </Carousel>
    );
};