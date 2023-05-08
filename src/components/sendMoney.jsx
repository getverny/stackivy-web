import box from "../assets/transf.svg";
import receive from "../assets/receive.png";

function SendMoney() {
  return (
    <section className="send-money">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h2>Send to anyone</h2>
            <p className="mt-4">Conveniently Link and manage your money in a secure electronic account using your cell phone number. Nearly is accessible by all, convenient, and extremely user-friendly.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-10 text-center">
            <img src={box} alt="transfer-successful" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container toppings">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h2>Receive from anyone</h2>
            <p className="mt-4">Are you having issues with your network or internet service? On Nearly, you can receive money from anyone in the country using our mobile money network in every location.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-10 text-center">
            <img src={receive} alt="transfer-successful" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendMoney;
