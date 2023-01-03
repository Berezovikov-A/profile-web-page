import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './HeaderMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import ContactMe from './ContactMe';

function App() {
  return (
    <>
      <HeaderMenu />
      <BrowserRouter>
        <Routes>
          <Route path='/aboutme' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contactme' element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
