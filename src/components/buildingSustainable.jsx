
import sus from "../assets/buildsus.png";
import dot from "../assets/dot.svg";



function BuildingSus() {
  return (
    <section className="buildingsus">
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <span className="closed">Closed</span>
            <h2 className="text-white mt-3">Building sustainable financial solutions for Africans</h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          <div className="col-sm-6 mb-3">
            <p className="mb-5 text-white">With sustainability being all the rage around the world, how do we channel some of that responsibility into building sustainable financial solutions for customers across the continent?</p>
            <span className="closed" style={{background: "#FF9707", borderRadius: "0px"}}>Guest speaker</span>
            <h6 className="text-white mt-3 mb-5">Onyinye Dallas</h6>
            <h3 className="text-white">The webinar will cover:</h3>
            <div className="mt-4">
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="dot" className="img-fluid" /></div>
                <div><h4 className="text-white mt-1">Challenges of sustainable practices in Africa</h4></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="dot" className="img-fluid" /></div>
                <div><h4 className="text-white mt-1">Is Africa ripe for sustainable products?</h4></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="dot" className="img-fluid" /></div>
                <div><h4 className="text-white mt-1">How do we tackle the challenges of sustainable financial solutions in Africa</h4></div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <img src={sus} alt="building sus" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildingSus