import CountUp from 'react-countup';

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
           <h3><CountUp end={3} delay={3} duration="2"  /><span>B+</span></h3>
           <h5>Transactions</h5>
          </div>
          <div className="col-3 text-center">
           <h3><CountUp end={183} delay={3} duration="2"  /><span>M+</span></h3>
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