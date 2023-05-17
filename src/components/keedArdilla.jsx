import laptop from "../assets/lap.png";
import laptop2 from "../assets/laptop.png";


function KeedArdilla() {
  return (
    <section className="keed-ardilla">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <h4>Financial Education</h4>
            <h2 className="mt-4 track">Keed + Ardilla</h2>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 my-5"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Explore Now
            </button>
            <img src={laptop} alt="laptop" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-9">
            <p>The first step to financial freedom is a proper education and our learn platform helps you with that. Now you can integrate our learning solution to create a robust educational platform for your application, thereby empowering your customers to be intentional with their finances or money.</p>
            <img src={laptop2} alt="laptop" className="img-fluid toppings" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeedArdilla;
