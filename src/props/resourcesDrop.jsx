import { Link } from "react-router-dom";

function ResourcesDrop(params) {
  return (
    <div className="dropdown-menu company-menu">
      <div className='row'>
        <div className='col-sm'>
          <h4>Resources</h4>
          <ul className="list-unstyled links">
            <li><Link>Product integration</Link></li>
            <li><Link to="/for-startup">Stackivy for startup</Link></li>
            <li><Link>Support</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link to="/">Guides</Link></li>
            <li><Link to="/webinar">Webinars </Link></li>
            <li><Link>Case studies</Link></li>
            <li><Link>Events </Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResourcesDrop