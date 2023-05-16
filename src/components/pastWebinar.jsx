import webinar from "../assets/pastweb.png";
import dot from "../assets/blues.svg";
import live from "../assets/sad.svg";



function PastWebinar() {
  return (
    <section className="info" style={{background: "#EFF5F9"}}>
      <div className="container">
        <div className="row justify-content-center mobileinfo">
          <div className="col-sm-4 text-center">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Past Webinars</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Live Webinars</button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <div className="row mt-9 justify-content-between">
                <div className="col-sm-6 mb-3">
                  <img src={webinar} alt="Past Webinar" className="img-fluid" />
                </div>
                <div className="col-sm-6 past-web">
                  <span className="closed" style={{background: "#E1EDF4", color: "#000"}}>Closed</span>
                  <h2 className="mt-3">Leveraging Technology to Change the Future of Finance in Africa</h2>
                  <p className="my-5">How do you leverage technology to transform the face of finance in Africa, especially when technology still faces much resistance?</p>
                  <span className="closed brd" style={{background: "#004EE1", color: "#fff", borderRadius: "0px"}}>Guest speaker</span>
                  <div className="mt-3 mb-5">
                    <div className="d-flex flex-row">
                      <h6>Moyo Kadiri</h6>
                      <h6 className="mx-4">Anita</h6>
                      <h6>Lore Kadiri</h6>
                    </div>
                  </div>
                  <h3 className="">The webinar will cover:</h3>
                  <div className="mt-4">
                    <div className="d-flex flex-row mb-3">
                      <div className="me-3"><img src={dot} alt="dot" className="img-fluid" /></div>
                      <div><h4 className="mt-1">Challenges of sustainable practices in Africa</h4></div>
                    </div>
                    <div className="d-flex flex-row mb-3">
                      <div className="me-3"><img src={dot} alt="dot" className="img-fluid" /></div>
                      <div><h4 className="mt-1">Is Africa ripe for sustainable products?</h4></div>
                    </div>
                    <div className="d-flex flex-row mb-3">
                      <div className="me-3"><img src={dot} alt="dot" className="img-fluid" /></div>
                      <div><h4 className="mt-1">How do we tackle the challenges of sustainable financial solutions in Africa</h4></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
              <div className='row mt-9'>
                <div className="col-sm-12">
                  <div className="text-center live-card">
                    <img src={live} alt="live" className="img-fluid" />
                    <h6 className="mt-4">You just missed it!. No upcoming webinars, check back later</h6>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default PastWebinar