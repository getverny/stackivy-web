import track from "../assets/trackcontrol.png";
import icon from "../assets/owa.svg";

function TrackControl() {
  return (
    <section className="track-control pb-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src={icon} alt="onwa" className="img-fluid" width={150} />
          </div>
        </div>
        <div className="row mt-4 justify-content-between">
          <div className="col-sm-6 mb-3">
            <h2 className="text-white">Track and control your <span style={{color: "#EF9600"}}>financial records</span> using <span style={{color: "#EF9600"}}>onwa.</span></h2>
          </div>
          <div className="col-sm-6">
            <p className="text-white">We have created custom financial solutions for the healthcare industry, allowing businesses within the industry easily manage purchases, invoices, expenses, and tax reports.</p>
            <p className="text-white mt-3">Onwa allows your healthcare business to transform its financial records while cutting costs and improving its finances.</p>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-sm-8 text-center">
            <img src={track} alt="trackcontrol" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackControl