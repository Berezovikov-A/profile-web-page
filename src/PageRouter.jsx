import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import ContactMe from './ContactMe';

export default function PageRouter() {
    const paths = [{
        path: '/aboutme', 
        element: <Home />,
    },{
        path: '/projects', 
        element: <Projects />,
    },{
        path: '/contactme', 
        element: <ContactMe />,       
    }]

    return (
        <BrowserRouter>
        <Routes>
          {paths.map((path) => <Route {...path} />)}
        </Routes>
      </BrowserRouter>

    )
}