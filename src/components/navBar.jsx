import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.svg";
import globe from "../assets/globe.svg";
import { Link } from 'react-router-dom';

function Header () {
  return (
    <Navbar bg="white" expand="lg" className='py-3 header sticky-top'>
      <Container>
        <Navbar.Brand href="#"><img src={logo} alt="stackivy" className='img-fluid' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="">Products</Nav.Link>
            <Nav.Link href="">Solution</Nav.Link>
            <Nav.Link href="">Resources</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
            <Nav.Link href="">Company</Nav.Link>
          </Nav>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="btn btn-primary btn-main rounded-pill px-5 py-3"
                  to=""
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item desktop">
                <img src={globe} alt="globe" className='img-fluid globe'/>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default Header