
import live from "../assets/sad.svg";
import phone from "../assets/phone.png";
import phones from "../assets/b.png";
import dot from "../assets/checkk.svg";
import contact from "../assets/contact.svg";


function PastEvents() {
  return (
    <section className="info" style={{background: "#fff"}}>
      <div className="container">
        <div className="row justify-content-center mobileinfo">
          <div className="col-sm-4 text-center">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Past Events</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Live Events</button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <div className="container-fluid mt-9 ard-prod pb-0">
                <div className="row">
                  <div className="col-sm-7">
                    <h1 className="text-white">Ardilla Product Launch</h1>
                    <p className="text-white">Stackivy is dedicated to offering financial products that help you with everyday solutions, and our latest product is Ardilla — Your Access To More.</p>
                    <p className="text-white mt-3">With Ardilla, you can access more tools and resources that help you become financially free.</p>
                    <p className="text-white mt-3 fw-bolder">With Ardilla, you can</p>
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
                    <img src={contact} alt="schedule" className="img-fluid" style={{marginTop: "60px"}} />
                  </div>
                  <div  className="col-sm-5 toppings pe-0">
                    <img src={phone} alt="live" className="img-fluid" style={{marginLeft: "48px"}} />

                  </div>
                </div>
              </div>
              <div className="container-fluid mt-9 ard-prod harbg pb-0">
                <div className="row">
                  <div className="col-sm-7">
                    <h1 className="text-white">Hargon Product Launch</h1>
                    <p className="text-white">Gone are the days when you were subjected to long wait times and unfair loan charges for personal or business use. But how do you feel about credit solutions that work for you and your business, giving you the backing you need to tackle unwanted challenges?</p>
                    <p className="text-white mt-3">Stackivy's Hargon is an intuitive credit solution that offers credit facilities tailored to your unique challenges.</p>
                    <p className="text-white mt-3 fw-bolder">With Hargon, you can</p>
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
                    <img src={contact} alt="schedule" className="img-fluid" style={{marginTop: "11px"}} />
                  </div>
                  <div  className="col-sm-5 toppings pe-0">
                    <img src={phones} alt="live" className="img-fluid" style={{marginLeft: "48px"}} />

                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
              <div className='row mt-9'>
                <div className="col-sm-12">
                  <div className="text-center live-card">
                    <img src={live} alt="live" className="img-fluid" />
                    <h6 className="mt-4">You just missed it!. No upcoming events, check back later</h6>
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

export default PastEvents