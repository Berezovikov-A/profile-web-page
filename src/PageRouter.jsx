import { Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

export default function PageRouter() {
    const paths = [{
        path: '/', 
        key: 'aboutme',
        element: <AboutMe />,
    },{
        path: '/projects',
        key: 'projects', 
        element: <Projects />,
    },{
        path: '/contact-me',
        key: 'contactme', 
        element: <ContactMe />,       
    }]

    return (
            <Routes>
                {paths.map((path) => <Route {...path} />)}
            </Routes>

    )
}