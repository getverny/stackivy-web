import why from "../assets/whyour.svg";

function WhyInvestment() {
  return (
    <section className="linear whyi">
      <div className="container">
        <div className="row justify-content-between">
         <div className="col-sm-8">
          <img src={why} alt="why" className="img-fluid mb-4" />
          <p className="text-white">Invest better with stackivy because:</p>
          <div className="toppings">
            <span className="text-white carou track">Our products make Financial freedom easier</span>
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default WhyInvestment