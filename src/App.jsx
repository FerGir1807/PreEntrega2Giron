import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import CartContainer from "./components/cart/CartContainer"
import NavBar from "./components/navBar/NavBar"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <h1 style={{ textAlign: "center" }}>
              <i className="bi bi-shop text-info"></i>Ecommerce tienda de Fútbol
            </h1>
          </div>
          <div className="col-md-auto">
            <CartContainer></CartContainer>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NavBar></NavBar>
          </div>
        </div>
        <div className="row">
          <Footer></Footer>
        </div>
      </div></>
  )
}

export default App
