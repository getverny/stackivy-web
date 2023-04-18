
import left from "../assets/left.svg";
import right from "../assets/right.svg";


function Discovery() {
  return (
    <section className="discovery">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4 className="mb-3">Discovery</h4>
            <h1>Do more with Stackivy <span className="pro">Products</span></h1>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-6">
            <img src={left} alt="left" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 text-end">
            <a href="https://ardilla.africa" target="_blank" rel="noreferrer"><img src={right} alt="left" className="img-fluid" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discovery