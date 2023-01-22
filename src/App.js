import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './HeaderMenu';
import PageRouter from './PageRouter';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import { useTheme } from './ModeContext';


function App() {

  const { theme } = useTheme();

  return (
    <div className={"d-flex flex-column h-100" + (theme === "dark" ? " bg-dark text-light" : "")}>
      <BrowserRouter>
        <HeaderMenu />
        <PageRouter />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
