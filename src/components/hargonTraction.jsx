import React from "react";
import CountUp from 'react-countup';

function HargonTraction() {
  return (
    <section className="traction">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="all-in-one">Traction</h2>
            <h6>Our products and investments grossed 1.1 billion in 2022</h6>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-md-3 mb-3">
            <div className="traction-cards biznes">
              <p>Business <span className="hgl" style={{background: "#EF4444"}}>Transactions</span></p>
              <h3>₦ 3B+</h3>
            </div>
          </div>
          
          <div className="col-md-3 mb-3">
            <div className="traction-cards profit">
              <p>Total <span className="hgl" style={{background: "#33593D"}}>Profit</span></p>
              <h3>₦ <CountUp end={300} delay={3} duration="20"  /> M</h3>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="traction-cards client">
              <p>Onboarded <span className="hgl" style={{background: "#9F9704"}}>Clients</span></p>
              <h3><CountUp end={1000} delay={3} duration="20"  />+</h3>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="traction-cards risks">
              <p>Risk <span className="hgl" style={{background: "#35298A"}}>Management</span></p>
              <h3><CountUp end={0} start={10} delay={3} duration="20" suffix="%"  /> Risk</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HargonTraction;
