import { Routes as Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

export default function PageRouter() {
    const paths = [{
        path: '/', 
        element: <AboutMe />,
    },{
        path: '/projects', 
        element: <Projects />,
    },{
        path: '/contact-me', 
        element: <ContactMe />,       
    }]

    return (
            <Switch>
                {paths.map((path) => <Route {...path} />)}
            </Switch>

    )
}