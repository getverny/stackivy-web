import apple from "../assets/i.png";


function Fincourse() {
  return (
    <section className="fincourse pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2 className="text-white">Make the best decision for your education. Take advantage of our financial courses.</h2>
            <h6 className="my-5 text-white">Tap into our  financial educational pool  as you get started on your search for financial freedom for an amazing ride.</h6>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to="" style={{color: "#1E2C31"}}
            >
              Create an Account
            </button>
          </div>
        </div>
        <div className="row mt-9 justify-content-center">
          <div className="col-sm-5 text-center">
            <img src={apple} alt="phone" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fincourse;
