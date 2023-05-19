import { FloatingLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LoginGovt() {
  return (
    <div className="d-lg-flex half">
      <Link to="/" className="bg order-1 order-md-1 new-aside"></Link>
        <div className="contents order-2 order-md-2">
          <div className="container">
            <div className="row align-items-start justify-content-center">
              <div className="col-md-7">
                <div style={{marginTop: "108px"}}>
                  <div className="login-form">
                    <h3 className="">Create a Government account </h3>
                    <Form className="mt-4">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Admin Name"
                        className="mb-4"
                      >
                        <Form.Control type="text" placeholder="username" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Sector"
                        className="mb-4"
                      >
                        <Form.Control type="text" placeholder="phonenumber" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Institution’s Name"
                        className="mb-4"
                      >
                        <Form.Control type="text" placeholder="" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-4"
                      >
                        <Form.Control type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Website/Social Media"
                        className="mb-4"
                      >
                        <Form.Control type="text" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                      <Link to="/dashboard" type="button" className="btn btn-primary w-100 login-btn">Sign Up</Link>
                      <div className="text-center mt-4">
                        <p>Don’t have an account?  <Link to="/login" className="fw-bold" style={{color: "#00B2B2"}}>Sign In</Link></p>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginGovt