import fore from "../assets/fore.png";


function CareerFooter() {
  return (
    <section className="careers-footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h2 className="text-white">Our Values</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <img src={fore} alt="our values" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerFooter;
