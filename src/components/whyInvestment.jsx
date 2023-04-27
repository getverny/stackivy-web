import why from "../assets/whyour.svg";

function WhyInvestment() {
  return (
    <section className="linear whyi">
      <div className="container">
        <div className="row justify-content-between">
         <div className="col-sm-8">
          <img src={why} alt="why" className="img-fluid mb-4" />
          <p className="text-white">Invest better with stackivy because:</p>
          <div className="toppings" id="cont">
            <div id="flip">
              <div><div className="text-white carou track">Our products make Financial freedom easier</div></div>
              <div><div className="text-white carou track">They help you or your business Assess financial risks better</div></div>
              <div><div className="text-white carou track">You have unlimited Access to multiple investments opportunities</div></div>
              <div><div className="text-white carou track">We will be by your side if there is a major crisis</div></div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default WhyInvestment