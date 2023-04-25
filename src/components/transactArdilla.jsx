import dilla from "../assets/dilla.svg";
import can from "../assets/can.svg";

function Transact() {
  return (
    <section className="transact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h2>Transact With <span className="fin-coach">Ardilla</span></h2>
            <h6>Every financial journey has unique challenges, and we get it. Our pro-vetted financial analysts are always available to offer you tailored professional guidance on how to make your financial adventure with Ardilla more productive.</h6>
          </div>
        </div>
        <div className="row mt-9 justify-content-around">
          <div className="col-sm-5 mb-3">
            <img src={dilla} alt="dilla" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-9">
            <h3>Dilla</h3>
            <p className="mb-5">Request and send money to your friends and family . Fall on the bright friendly side with Ardilla by transferring money to friends and family whenever, wherever with no transaction charges</p>
            <button
              className="btn btn-primary btn-000 rounded-pill px-5 py-4"
              to=""
              style={{background: "#8311E4"}}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="row mt-9 justify-content-around">
          <div className="col-sm-5 mt-9 mb-3">
            <h3>CAN</h3>
            <p className="mb-5 w-75">Have access to a multipurpose stash and have the ability to transact, send money and share in Ardilla at the same time also send money outside Ardilla. Two in one stash, yes please</p>
            <button
              className="btn btn-primary btn-000 rounded-pill px-5 py-4"
              to=""
              style={{background: "#8311E4"}}
            >
              Get Started
            </button>
          </div>
          <div className="col-sm-5">
            <img src={can} alt="dilla" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transact;
