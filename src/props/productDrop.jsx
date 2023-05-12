import { Link } from "react-router-dom";
import ardilla from "../assets/ardilla.svg";
import vernde from "../assets/vernde.svg";
import zetta from "../assets/zetta.svg";
import onescud from "../assets/onescud.svg";
import keed from "../assets/keed.svg";
import pomelo from "../assets/pomelo.svg";
import onwa from "../assets/onwa.svg";
import hargon from "../assets/hargon.svg";
import moon from "../assets/spaycemo.svg";
import nearly from "../assets/nearly.svg";
import curved from "../assets/curved.svg";
import { Icon } from '@iconify/react';


function ProductDropdown() {
  return (
    <div className="dropdown-menu product-menu">
    <div className='row'>
      <div className='col-sm-4 mb-3'>
        <Link className='' to="/ardilla">
          <img src={ardilla} alt="about-us" className='img-fluid' />
        </Link>
        <Link className='' to="/hargon">
          <img src={hargon} alt="about-us" className='img-fluid' />
        </Link>
        <Link className=''>
          <img src={vernde} alt="about-us" className='img-fluid' />
        </Link>
        <Link className=''>
          <img src={zetta} alt="about-us" className='img-fluid' />
        </Link>
      </div>
      <div className='col-sm-4 mb-3'>
        <Link className=''>
          <img src={pomelo} alt="about-us" className='img-fluid' style={{width: "77%"}} />
        </Link>
        <Link className=''>
          <img src={onwa} alt="about-us" className='img-fluid' style={{width: "75%"}} />
        </Link>
        <Link className=''>
          <img src={keed} alt="about-us" className='img-fluid' style={{width: "74%"}} />
        </Link>
        <Link className=''>
          <img src={onescud} alt="about-us" className='img-fluid' style={{width: "71%", marginTop: "-8px"}} />
        </Link>
      </div>
      <div className='col-sm-4 mb-3'>
        <Link className=''>
          <img src={moon} alt="about-us" className='img-fluid' />
        </Link>
        <Link className=''>
          <img src={curved} alt="about-us" className='img-fluid' />
        </Link>
        <Link className=''>
          <img src={nearly} alt="about-us" className='img-fluid' />
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
  )
}

export default ProductDropdown;