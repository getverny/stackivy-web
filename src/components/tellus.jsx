import bulb from "../assets/bulb.png";


function Tellus() {
  return (
    <section className="tellus">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <h2>Tell us what situation describes your need.</h2>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-sm-5 mb-3">
            <img src={bulb} alt="Need help developing the next great idea?" className="img-fluid" width={150} />
            <h3 className="my-5">Need help developing the next great idea?</h3>
            <p>Are you a start-up with a great idea but having challenges turning your idea into a product? Stackivy is committed to collaborating with start-ups as an incubator to provide them with all the assistance they need to achieve their goals.</p>
            <a
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-4"
              href="#startbuilding" style={{background: 'linear-gradient(117.04deg, #00AC10 -13.79%, #02A6B0 131.52%)'}}
            >
              Apply for partnerships now
            </a>
          </div>
          <div className="col-sm-5 mb-3">
            <img src={bulb} alt="Need help developing the next great idea?" className="img-fluid" width={150} />
            <h3 className="my-5">Need Tailored products?</h3>
            <p>Stackivy is committed to helping start-ups develop easy and low-cost financial products to help them navigate complex financial situations as they look to build.</p>
            <a
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-4"
              href="#startbuilding" style={{background: 'linear-gradient(117.04deg, #00AC10 -13.79%, #02A6B0 131.52%)'}}
            >
              Apply for partnerships now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tellus;
