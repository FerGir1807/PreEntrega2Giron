import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from '../item/ItemListContainer';
import { PRODUCT_TYPE } from '../../utils/enums';
import { ItemDetail } from '../item/ItemDetail';
import Home from '../home/home';

function NavBar() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/"><i className="bi bi-shop text-info"></i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Damas" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/productos/dama/jerseys">Jerseys</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/productos/dama/chamarras">Chamarras</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/productos/dama/accesorios">Accesorios</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/productos/dama/maletas">Maletas de viaje</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Caballeros" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/productos/caballero/jerseys">Jerseys</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/productos/caballero/chamarras">Chamarras</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/productos/caballero/accesorios">Accesorios</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/productos/caballero/entretenimiento">Entrenamiento</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Niños" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/productos/nino/jerseys">Jerseys</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/productos/nino/entrenamiento">Entrenamiento</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home greeting="Bienvenido a nuestra tienda" />} />
                <Route path="productos/dama/:categoryId" element={<ItemListContainer greeting="Bienvenido a la sección de Damas" productType={PRODUCT_TYPE.DAMA} />} />
                <Route path="productos/caballero/:categoryId" element={<ItemListContainer greeting="Bienvenido a la sección de Caballeros" productType={PRODUCT_TYPE.CABALLERO} />} />
                <Route path="productos/nino/:categoryId" element={<ItemListContainer greeting="Bienvenido a la sección de Niños" productType={PRODUCT_TYPE.CABALLERO} />} />
                <Route path="item/:productId" element={<ItemDetail />} />
            </Routes>
        </>
    )
}
export default NavBar