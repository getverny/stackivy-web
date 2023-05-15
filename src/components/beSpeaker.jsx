import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function BeSpeaker() {
  return (
    <section className="bespeaker">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h2>Be a speaker on our next webinar</h2>
            <p className="mt-4">Would you like to take charge in the financial sector? Share knowledge and impact lives? Be a speaker on our next webinar and wait for an invitation.</p>
          </div>
        </div>
        <div className='row mt-5 justify-content-center info'>
          <div className='col-sm-10'>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                   <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className='mt-4'>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Linkedin/Instagram</Form.Label>
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
                <Form.Label>Introduce yourself</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder='Something we should know before our sales team contact you' />
              </Form.Group>
              <div className='text-center'>
                <button
                  className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
                  to="" style={{background: '#F4CD3E', color: "#000"}}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeSpeaker