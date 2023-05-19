import { FloatingLabel } from "react-bootstrap";
// import Input from "./input";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="d-lg-flex half">
      <Link to="/" className="bg order-1 order-md-1 new-aside"></Link>
        <div className="contents order-2 order-md-2">
          <div className="container">
            <div className="row align-items-start justify-content-center">
              <div className="col-md-7">
                <div style={{marginTop: "108px"}}>
                  <div className="login-form">
                    <h3 className="">Sign In to access your account</h3>
                    <Form className="mt-4">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="<kode Hex/> or Email address"
                        className="mb-4"
                      >
                        <Form.Control type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                      {/* <Form.Group className="mb-4">
                        <Input
                          type="password"
                          name="password"
                          label="Password"
                        />
                      </Form.Group> */}
                      <Link to="/dashboard" type="button" className="btn btn-primary w-100 login-btn">Sign In</Link>
                      <div className="text-center mt-4">
                        <p>Don’t have an account?  <span className="fw-bold" style={{color: "#00B2B2"}}>Sign Up</span></p>
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

export default SignIn