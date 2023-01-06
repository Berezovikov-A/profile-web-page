import Carousel from 'react-bootstrap/Carousel';
import logo from './logo.svg';


export default function Projects() {
    const carouselProps = [{
        children: "Slide1",
    },{
        children: "Slide2",
    },{
        children: "Slide3",
    }];

    return (
        <div className="mt-4">
                <Carousel variant='dark'>
                    {carouselProps.map(({children}) =>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={logo}
                                alt={children}
                                />
                            <Carousel.Caption>
                                <h3>{children}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>)}
                </Carousel>
        </div>    
    );
};