import { Link } from 'react-router-dom';
import personal from "../../assets/login-per.svg";
import business from "../../assets/login-bus.svg";
import govt from "../../assets/login-govt.svg";


function LoginOptions() {
  return (
    <div className="d-lg-flex half">
      <Link to="/" className="bg order-1 order-md-1 new-aside"></Link>
        <div className="contents order-2 order-md-2">
          <div className="container">
            <div className="row align-items-start justify-content-center">
              <div className="col-md-12 px-5">
                <div style={{marginTop: "108px"}}>
                  <div className="login-form">
                    <h3 className="">Select which type of account you want to open</h3>
                    <div className='row mt-4'>
                      <div className='col-sm-4 mb-3'>
                        <Link to="/signup-for-personal">
                          <div className='option-card'>
                            <img src={personal} alt="personal" className='img-fluid'/>
                            <h3 className='my-3 fw-bold'>Personal </h3>
                            <h5>Select which type of account you want to open</h5>
                          </div>
                        </Link>
                      </div>
                      <div className='col-sm-4 mb-3'>
                        <Link to="/signup-for-business">
                          <div className='option-card'>
                            <img src={business} alt="personal" className='img-fluid'/>
                            <h3 className='my-3 fw-bold'>Business </h3>
                            <h5>Select which type of account you want to open</h5>
                          </div>
                        </Link>
                      </div>
                      <div className='col-sm-4 mb-3'>
                        <Link to="/signup-for-govt">
                          <div className='option-card'>
                            <img src={govt} alt="personal" className='img-fluid'/>
                            <h3 className='my-3 fw-bold'>Government </h3>
                            <h5>Select which type of account you want to open</h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginOptions