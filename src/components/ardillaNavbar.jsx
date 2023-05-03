import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/white-logo.svg";
import coming from "../assets/cs.svg";
import global from "../assets/global.svg";
import nig from "../assets/9ja.svg";
import usa from "../assets/usa.svg";
import uk from "../assets/uk.svg";
import zim from "../assets/zim.svg";
import globe from "../assets/globe-fff.svg";
import ardilla from "../assets/ardilla.svg";
import vernde from "../assets/vernde.svg";
import zetta from "../assets/zetta.svg";
import onescud from "../assets/onescud.svg";
import keed from "../assets/keed.svg";
import pomelo from "../assets/pomelo.svg";
import onwa from "../assets/onwa.svg";
import hargon from "../assets/hargon.svg";
import about from "../assets/about.svg";
import privacy from "../assets/privacy.svg";
import moon from "../assets/moon.svg";
import nearly from "../assets/nearly.svg";
import curved from "../assets/curved.svg";
import terms from "../assets/terms.svg";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


function ArdillaHeader () {
  return (
    <Navbar expand="lg" className='py-3 ardilla-header sticky-top'>
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="stackivy" className='img-fluid' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </Link>
              <div className="dropdown-menu product-menu">
                <div className='row'>
                  <div className='col-sm-4 mb-3'>
                    <Link className='' to="/ardilla">
                      <img src={ardilla} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className='' to="/hargon">
                      <img src={hargon} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className='coming-soon'>
                      <img src={vernde} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className='coming-soon'>
                      <img src={zetta} alt="about-us" className='img-fluid w-75' />
                    </Link>
                  </div>
                  <div className='col-sm-4 mb-3 coming-soon'>
                    <Link className=''>
                      <img src={pomelo} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className=''>
                      <img src={onwa} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className=''>
                      <img src={keed} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className=''>
                      <img src={onescud} alt="about-us" className='img-fluid w-75' />
                    </Link>
                  </div>
                  <div className='col-sm-4 mb-3 coming-soon'>
                    <Link className=''>
                      <img src={moon} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className=''>
                      <img src={curved} alt="about-us" className='img-fluid w-75' />
                    </Link>
                    <Link className=''>
                      <img src={nearly} alt="about-us" className='img-fluid w-75' />
                    </Link>
                  </div>
                </div>
                <div className='row mt-5 px-5'>
                  <div className='col-sm-6'>
                    <div className='d-flex flex-row'>
                      <p className='me-5'><Icon icon="ic:twotone-slow-motion-video" className='me-2' />Watch Demo</p>
                      <p className='me-5'><Icon icon="ion:pricetags" className='me-2' />Pricing</p>
                      <p><Icon icon="mingcute:chat-1-fill" className='me-2' />Contact Sales</p>
                    </div>
                  </div>
                  <div className='col-sm-6 text-end'>
                    <p>Ready to get started? Select your pick</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </Link>
              <div className="dropdown-menu solution-menu">
                <div className='row'>
                  <div className='col-sm-3 mb-2'>
                    <h4>Personal</h4>
                    <ul className="list-unstyled links">
                      <li><Link to="/budgeting-tools">Budgeting tools</Link></li>
                      <li><Link to="/financial-education">Financial education</Link></li>
                      <li><Link to="/wealth-management">Wealth management</Link></li>
                      <li><Link>Retirement planning</Link></li>
                      <li><Link to="/cross-border">Cross-border payment </Link></li>
                      <li><Link to="/payment-gateway">Payment gateway solutions </Link></li>
                      <li><Link>Cryptocurrency  </Link></li>
                      <li><Link>Foreign exchange trading  </Link></li>
                      <li><Link>Microfinance solutions  </Link></li>
                      <li><Link>Mobile money  </Link></li>
                    </ul>
                  </div>
                  <div className='col-sm-3 mb-2'>
                    <h4>Business</h4>
                    <ul className="list-unstyled links">
                      <li><Link>Financial management software</Link></li>
                      <li><Link>Payment gateway </Link></li>
                      <li><Link>Cross-border payment </Link></li>
                      <li><Link>Lending</Link></li>
                      <li><Link>Cryptocurrency  </Link></li>
                      <li><Link>Foreign exchange trading </Link></li>
                      <li><Link>Microfinance  </Link></li>
                      <li><Link>Open banking   </Link></li>
                      <li><Link>Wealth management  </Link></li>
                      <li><Link>Custom made solutions  </Link></li>
                      <li><Link>Bookkeeping & expense tracking services  </Link></li>
                    </ul>
                  </div>
                  <div className='col-sm-3 mb-2'>
                    <h4>Government</h4>
                    <ul className="list-unstyled links">
                      <li><Link>Cross-border payment</Link></li>
                      <li><Link>Custom made solutions </Link></li>
                      <li><Link>Lending solutions </Link></li>
                      <li><Link>Remittance</Link></li>
                    </ul>
                  </div>
                  <div className='col-sm-3 mb-2'>
                    <h4>Industries</h4>
                    <ul className="list-unstyled links">
                      <li><Link>E-commerce</Link></li>
                      <li><Link>Healthcare </Link></li>
                      <li><Link>Food </Link></li>
                      <li><Link>Education</Link></li>
                      <li><Link>Human Resources</Link></li>
                      <li><Link>Logistics & Trasnsportation</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='row mt-5 px-5'>
                  <div className='col-sm-6'>
                    <div className='d-flex flex-row'>
                      <p className='me-5'><Icon icon="ion:pricetags" className='me-2' />Pricing</p>
                      <p><Icon icon="mingcute:chat-1-fill" className='me-2' />Contact Sales</p>
                    </div>
                  </div>
                  <div className='col-sm-6 text-end'>
                    <p>Ready to get started? Select your pick</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </Link>
              <div className="dropdown-menu company-menu">
                <div className='row'>
                  <div className='col-sm'>
                    <h4>Resources</h4>
                    <ul className="list-unstyled links">
                      <li><Link>Product integration</Link></li>
                      <li><Link>Stackivy for startup</Link></li>
                      <li><Link>Support</Link></li>
                      <li><Link>Blog</Link></li>
                      <li><Link>Guides</Link></li>
                      <li><Link>Webinars </Link></li>
                      <li><Link>Case studies</Link></li>
                      <li><Link>Events </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            
            <Nav.Link href="">Pricing</Nav.Link>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </Link>
              <div className="dropdown-menu company-menu company">
                <Link className='d-flex flex-row mb-2'>
                  <img src={about} alt="about-us" className='img-fluid' />
                  <div className='title-header mt-3'>
                    <h4>About Us</h4>
                    <p>Know Us More</p>
                  </div>
                </Link>
                <Link className='d-flex flex-row mb-2'>
                  <img src={privacy} alt="about-us" className='img-fluid' />
                  <div className='title-header mt-3'>
                    <h4>Privacy Policy</h4>
                    <p>Security</p>
                  </div>
                </Link>
                <Link className='d-flex flex-row'>
                  <img src={terms} alt="about-us" className='img-fluid' />
                  <div className='title-header mt-3'>
                    <h4>Terms & Conditions</h4>
                    <p>User Policies</p>
                  </div>
                </Link>
              </div>
            </li>
          </Nav>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="btn btn-primary btn-fff rounded-pill px-5 py-3"
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


export default ArdillaHeader