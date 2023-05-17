import { Link } from "react-router-dom";
import about from "../assets/about.svg";
import privacy from "../assets/privacy.svg";
import terms from "../assets/terms.svg";


function CompanyDropdown() {
  return (
    <div className="dropdown-menu company-menu company">
      <Link to="/about-us" className='d-flex flex-row mb-2'>
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
  )
}

export default CompanyDropdown;