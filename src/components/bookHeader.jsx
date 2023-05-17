import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.svg";
import coming from "../assets/cs.svg";
import global from "../assets/global.svg";
import nig from "../assets/9ja.svg";
import usa from "../assets/usa.svg";
import uk from "../assets/uk.svg";
import zim from "../assets/zim.svg";
import globe from "../assets/globe.svg";
import { Link } from 'react-router-dom';
import SolutionDrop from '../props/solutionDrop';
import ProductDropdown from '../props/productDrop';
import ResourcesDrop from '../props/resourcesDrop';
import CompanyDropdown from '../props/companyDrop';


function Header () {
  return (
    <Navbar bg="white" expand="lg" className='py-3 header sticky-top book-header'>
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="stackivy" className='img-fluid' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </Link>
              <ProductDropdown/>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </Link>
              <SolutionDrop/>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </Link>
              <ResourcesDrop/>
            </li>
            
            <Nav.Link href="">Pricing</Nav.Link>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </Link>
              <CompanyDropdown/>
            </li>
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
              <li className="nav-item desktop no-caret">
                <div className='dropdown'>
                  <Link className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={globe} alt="globe" className='img-fluid globe'/></Link>
                  <div className="dropdown-menu globe-menu">
                    <div>
                      <img src={global} alt="global" className='img-fluid' />
                      <img src={coming} alt="global" className='img-fluid float-end mt-2' />
                    </div>
                    <div className='mt-3'>
                      <img src={nig} alt="global" className='img-fluid' />
                    </div>
                    <div className='mt-3'>
                      <img src={usa} alt="global" className='img-fluid' />
                      <img src={coming} alt="global" className='img-fluid float-end mt-2' />
                    </div>
                    <div className='mt-3'>
                      <img src={uk} alt="global" className='img-fluid' />
                      <img src={coming} alt="global" className='img-fluid float-end mt-2' />
                    </div>
                    <div className='mt-3'>
                      <img src={zim} alt="global" className='img-fluid' />
                      <img src={coming} alt="global" className='img-fluid float-end mt-2' />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}


export default Header