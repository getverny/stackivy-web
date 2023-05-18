import talk from "../assets/join.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import comingsoon from "../assets/footersoon.svg";
import liner from "../assets/liner.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function BudgetFooter() {
  const [value, setValue] = useState("");

  const onInput = (e) => setValue(e.target.value);

  const onClear = () => {
    setValue("");
  };
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="footer-top bud-foot">
              <h4 className="text-white">Be Part of the Stackivy Community</h4>
              <h6 className="text-white my-4 w-50">Stackivy community is Africa's leading finance forum comprising of the best financial minds on the continent. Our community is changing the narrative of finance on the continent and we need your input.</h6>
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
                  <input type="email" className="form-control" placeholder="Enter your email" value={value} onInput={onInput}/>
                  <span className="input-group-btn">
                    <button className="btn" type="button"  onClick={onClear}>Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row navigation">
            <div className="col-sm mb-3">
              <h5>Our Products</h5>
              <h4>Custom</h4>
              <ul className="list-unstyled links">
                <li><Link>Onescud <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
              </ul>
              <img src={liner} alt="liner" className="img-fluid mb-3" />
              <h4>Tailored</h4>
              <ul className="list-unstyled links">
                <li><Link to="/ardilla">Ardilla</Link></li>
                <li><Link to="/hargon">Hargon</Link></li>
                <li><Link>Keed <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
                <li><Link>Vernde <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
                <li><Link>Onwa <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
                <li><Link>Pomelo <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
                <li><Link>Nearly <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
                <li><Link>Zettarh <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
                <li><Link>Curved <img src={comingsoon} alt="coming-soon" className="img-fluid ms-2" width={60} /></Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h5>Resources</h5>
              <ul className="list-unstyled links">
                <li><Link to="/product-integration">Product integration</Link></li>
                <li><Link to="/for-startup">Stackivy for startup</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/guides">Guides</Link></li>
                <li><Link to="/webinar">Webinars</Link></li>
                <li><Link to="/case-studies">Case studies</Link></li>
                <li><Link to="/events">Events</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h5>Stackivy</h5>
              <ul className="list-unstyled links">
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="faqs">FAQs</Link></li>
                <li><Link to="/press">Press</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h5>Transparency</h5>
              <ul className="list-unstyled links">
                <li><Link>Terms & conditions</Link></li>
                <li><Link>Information security policy</Link></li>
                <li><Link>Privacy Policy</Link></li>
                <li><Link>Pricing</Link></li>
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
                <a href="https://www.facebook.com/getstackivy/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" className="img-fluid me-3" /></a>
                <a href="https://instagram.com/stackivy.africa?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" className="img-fluid me-3" /></a>
                <a href="https://www.linkedin.com/company/stackivy/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className="img-fluid me-3" /></a>
                <a href="https://twitter.com/getstackivy?s=11&t=DDZ4XEo9V0QwB535j-9ysA" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" className="img-fluid me-3" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default BudgetFooter