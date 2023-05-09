import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function SolutionDrop(params) {
  return (
    <div className="dropdown-menu solution-menu">
      <div className='row'>
        <div className='col-sm-3 mb-2'>
          <h4>Personal</h4>
          <ul className="list-unstyled links">
            <li><Link to="/budgeting-tools">Budgeting tools</Link></li>
            <li><Link to="/financial-education">Financial education</Link></li>
            <li><Link to="/wealth-management">Wealth management</Link></li>
            <li><Link to="/cross-border">Cross-border payment</Link></li>
            <li><Link to="/payment-gateway">Payment gateway </Link></li>
            <li><Link to="/cryptocurrency">Cryptocurrency </Link></li>
            <li><Link to="/microfinance">Microfinance</Link></li>
            <li><Link to="/mobile-money">Mobile money</Link></li>
            <li><Link to="/lending">Lending  </Link></li>
          </ul>
        </div>
        <div className='col-sm-3 mb-2'>
          <h4>Business</h4>
          <ul className="list-unstyled links">
            <li><Link to="/custom-made">Custom made  </Link></li>
            <li><Link>Payment gateway </Link></li>
            <li><Link>Cross-border payment </Link></li>
            <li><Link>Cryptocurrency </Link></li>
            <li><Link>Microfinance  </Link></li>
            <li><Link to="/open-banking">Open banking   </Link></li>
            <li><Link>Wealth management  </Link></li>
            {/* <li><Link>Custom made  </Link></li> */}
            <li><Link to="/book-keeping">Book keeping & expense tracking  </Link></li>
          </ul>
        </div>
        <div className='col-sm-3 mb-2'>
          <h4>Government</h4>
          <ul className="list-unstyled links">
            <li><Link>Cross-border payment</Link></li>
            <li><Link>Custom made </Link></li>
            <li><Link>Remittance</Link></li>
            <li><Link>Lending</Link></li>
          </ul>
        </div>
        <div className='col-sm-3 mb-2'>
          <h4>Industries</h4>
          <ul className="list-unstyled links">
            <li><Link to="/ecommerce">E-commerce</Link></li>
            <li><Link to="/healthcare">Healthcare </Link></li>
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
  )
}

export default SolutionDrop;