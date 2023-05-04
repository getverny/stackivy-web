import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import need from "../assets/info00.svg";

function MobileInfo() {
  return (
    <section className="info" id='startbuilding'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={need} alt="needmore" className='img-fluid' />
            <h6 className="mt-4">Choose which of our products you want to be contacted for by filling the form below</h6>
          </div>
        </div>
        <div className="row mt-9 justify-content-center mobileinfo">
          <div className="col-sm-3 text-center">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Personal</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Business</button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <div className='row mt-5 justify-content-center'>
                <div className='col-sm-10'>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                         <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className='mt-4'>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control type="tel" />
                        </Form.Group>
                      </Col>
                      <Col>
                         <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="my-4">
                      <Form.Label>Your message (optional)</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder='Something we should know before our sales team contact you' />
                    </Form.Group>
                    <div className='text-center'>
                      <button
                        className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
                        to="" style={{background: '#000', color: "#fff"}}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
              <div className='row mt-5 justify-content-center'>
                <div className='col-sm-10'>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                         <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className='mt-4'>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className='mt-4'>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Overview</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                         <Form.Group className="mb-3">
                          <Form.Label>Company website/ Social media link</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="my-4">
                      <Form.Label>Your message (optional)</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder='Something we should know before our sales team contact you' />
                    </Form.Group>
                    <div className='text-center'>
                      <button
                        className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
                        to="" style={{background: '#000', color: "#fff"}}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileInfo