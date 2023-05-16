import startup from "../assets/three.png";


function WebinarHero() {
  return (
    <section className="webinarhero">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mt-9">
            <h2 className="text-white">Grow your start-up<br/>with the right partner</h2>
            <h6 className="mt-5 text-white">Launching a start-up is fun but comes with its fair share of financial challenges. Every transaction counts, whether credit or debit and making the most of every penny is vital. Wouldn't it help if you had </h6>
          </div>
          <div className="col-sm-6">
            <img src={startup} alt="startup" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebinarHero;
