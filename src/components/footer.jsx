import talk from "../assets/talk.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="footer-top">
              <h4 className="text-white">Building the next big thing?</h4>
              <h6 className="text-white my-4">Stackivy is interested in speaking with companies who want to build<br/>tech-enabled products and platforms.</h6>
              <Link><img src={talk} alt="let-talk" className="img-fluid float-end" /></Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 text-center">
              <div className="subscribe">
                <h3>Subscribe to get the latest updates and news </h3>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email"/>
                  <span className="input-group-btn">
                    <button className="btn" type="submit">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row navigation">
            <div className="col-sm mb-3">
              <h5>Our Products</h5>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <h4>Custom</h4>
                  <ul className="list-unstyled links">
                    <li><Link>Onescud</Link></li>
                  </ul>
                </div>
                <div className="col-sm-6 mb-3">
                <h4>Tailored</h4>
                  <ul className="list-unstyled links">
                    <li><Link>Ardilla</Link></li>
                    <li><Link>Keed</Link></li>
                    <li><Link>Vernde</Link></li>
                    <li><Link>Onwa</Link></li>
                    <li><Link>Pomelo</Link></li>
                    <li><Link>Hargon</Link></li>
                    <li><Link>Nearly</Link></li>
                    <li><Link>Zettarh</Link></li>
                    <li><Link>Curved</Link></li>
                  </ul>
                </div>
              </div>
              
            </div>
            <div className="col-sm mb-3">
              <h5>Resources</h5>
              <ul className="list-unstyled links">
                <li><Link>Product integration</Link></li>
                <li><Link>Stackivy for startup</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Guides</Link></li>
                <li><Link>Webinars</Link></li>
                <li><Link>Case studies</Link></li>
                <li><Link>Events</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h5>Stackivy</h5>
              <ul className="list-unstyled links">
                <li><Link>About us</Link></li>
                <li><Link>Careers</Link></li>
                <li><Link>FAQs</Link></li>
                <li><Link>Press</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h5>Transparency</h5>
              <ul className="list-unstyled links">
                <li><Link>Terms & conditions</Link></li>
                <li><Link>Information security policy</Link></li>
                <li><Link>Privacy</Link></li>
                <li><Link>Policy</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h5>Developer</h5>
              <ul className="list-unstyled links">
                <li><Link>Spaycemoon</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h5>Address</h5>
              <ul className="list-unstyled links">
                <li><Link>33B, Ogundana street, Allen, Ikeja.</Link></li>
              </ul>
              <h5>Contact</h5>
              <ul className="list-unstyled links">
                <li><Link>Support@stackivy.africa</Link></li>
                <li><Link>(234) 706 5669 917</Link></li>
              </ul>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-sm-10 mb-2">
              <h6>© 2023 Stackivy. All right reserved</h6>
            </div>
            <div className="col-sm-2">
              <div className="d-flex flex-row">
                <a href="#!"><img src={facebook} alt="facebook" className="img-fluid me-3" /></a>
                <a href="#!"><img src={instagram} alt="instagram" className="img-fluid me-3" /></a>
                <a href="#!"><img src={linkedin} alt="linkedin" className="img-fluid me-3" /></a>
                <a href="#!"><img src={twitter} alt="twitter" className="img-fluid me-3" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer