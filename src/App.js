import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './HeaderMenu';
import PageRouter from './PageRouter';
import Footer from './Footer';

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <HeaderMenu />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
