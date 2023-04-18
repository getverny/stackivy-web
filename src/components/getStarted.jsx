
function GetStarted() {
  return (
    <section className="getstarted">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h4 className="mb-3 text-white">Just getting started</h4>
            <h2>Our products and investments grossed<br/>1.1 billion in 2022</h2>
          </div>
        </div>

        <div className="row justify-content-center mt-9 desktop">
          <div className="col-3 text-center">
           <h3>3B<span>+</span></h3>
           <h5>Investment</h5>
          </div>
          <div className="col-3 text-center">
           <h3>182M<span>+</span></h3>
           <h5 style={{background: "#8807F7"}}>ROI</h5>
          </div>
          <div className="col-3 text-center">
           <h3>0<span>%</span></h3>
           <h5 style={{background: "#2563EB"}}>Risk</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted