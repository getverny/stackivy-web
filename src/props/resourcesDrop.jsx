import { Link } from "react-router-dom";

function ResourcesDrop() {
  return (
    <div className="dropdown-menu company-menu">
      <div className='row'>
        <div className='col-sm'>
          <h4>Resources</h4>
          <ul className="list-unstyled links">
            <li><Link to="/product-integration">Product integration</Link></li>
            <li><Link to="/for-startup">Stackivy for startup</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link to="/">Guides</Link></li>
            <li><Link to="/webinar">Webinars </Link></li>
            <li><Link to="/case-studies">Case studies</Link></li>
            <li><Link to="/events">Events </Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResourcesDrop