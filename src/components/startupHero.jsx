import startup from "../assets/startup.svg";


function StartupHero() {
  return (
    <section className="startuphero">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <h2>Grow your start-up with the right partner</h2>
            <h6 className="mt-5">Launching a start-up is fun but comes with its fair share of financial challenges. Every transaction counts, whether credit or debit and making the most of every penny is vital. Wouldn't it help if you had a solid financial partner to take on those financial challenges?</h6>
            <h6 className="mt-3">Stackivy for start-ups ensures you have a reliable partner to help shoulder some of the financial stress and challenges.</h6>
            <a
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
              href="#startbuilding" style={{background: 'linear-gradient(117.04deg, #00AC10 -13.79%, #02A6B0 131.52%)'}}
            >
              Get started
            </a>
          </div>
          <div className="col-sm-6">
            <img src={startup} alt="startup" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartupHero;
