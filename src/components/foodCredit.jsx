import mobilefood from "../assets/hargon.png";
// import burger from "../assets/burger.png";



function FoodCredit() {
  return (
    <section className="foodcredit pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <h2>Food credit<br/>with <span style={{color: "#15803D"}}>Hargon</span></h2>
          </div>
          <div className="col-sm-5">
            {/* <img src={burger} alt="food" className="img-fluid w-100" />             */}
            <p>Businesses in the food industry can now enjoy easy access to quick credit for capital or expansion. Businesses can also access credit for infrastructures such as machines, trucks, processing plants, and others. Hargon provides financial solutions that ensure your business is thriving and prosperous. That means, with Hargon, you can expect lower interest and no hidden charges. Jump on the Hargon Train</p>
          </div>
        </div>
        <div className="row mt-9 justify-content-center">
          <div className="col-sm-7">
            <img src={mobilefood} alt="Mobile Food" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodCredit