import desktop from "../assets/dashboard.svg";
import moon from "../assets/mooon.svg";


function TrackPayment() {
  return (
    <section className="paytrack pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={moon} alt="Onwa" className="img-fluid" />
            <h2 className="my-4">Track payment with<br/><span style={{color: "#FFA000"}}>Onwa</span></h2>
            <h6 className="">Track and stay on top of your finances. Manage payment inflow and transactions with customers easily on Onwa. Onwa ensures you never lose track of any financial transactions between you and your customers, enabling your business properly account for every financial inflow on your platform. Track with Onwa</h6>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-11 text-center">
            <img src={desktop} alt="Onwa" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackPayment;
