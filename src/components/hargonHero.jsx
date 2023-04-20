import liner from "../assets/hargonline.svg"


function HargonHero() {
  return (
    <section className="hargon-hero">
      <div className="container">
        <div className="row">
          <div className="">
            <div className="col-sm-8">
              <span><img src={liner} alt="liner" className="img-fluid" style={{marginRight: "15px", marginTop: "-3px"}} /> Hargon</span>
              <h1 className="mt-4">Credit anywhere, anytime </h1>
              <h6 className="w-75 mt-5">Hargon is your favourite credit partner, offering credit solutions to fund your personal or business needs. From fast processing times to competitive interest rates, Hargon has simplified credit, making it readily available whenever and wherever you need it.</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HargonHero;
