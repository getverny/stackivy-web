import bank from "../assets/bank.svg";
import phones from "../assets/mockup.svg";
import user from "../assets/usersss.svg";


function MobileHero() {
  return (
    <section className="mobile-hero pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <img src={bank} alt="Bank with zero limitations on your mobile" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-3">
            <h6 className="text-white">Send and receive money to anyone, anywhere, anytime, using Stackivy's simplified mobile money platform</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 my-5"
              to="" style={{background: '#6AF938', color: "#000"}}
            >
              Get Started
            </button>
            <div>
              <img src={user} alt="users" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row mt-9 justify-content-center">
          <div className="col-sm-10">
            <img src={phones} alt="Bank with zero limitations on your mobile" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileHero;
