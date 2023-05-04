import per from "../assets/psl.svg";
import phone from "../assets/itp.svg";
import itt from "../assets/itt.svg";


function InstantTransfer() {
  return (
    <section className="instanttransfer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src={per} alt="personal" className="img-fluid" />
          </div>
        </div>
        <div className="it pb-0 mt-4">
          <div className="row">
            <div className="col-sm-6 mt-9">
              <img src={itt} alt="Instant Transfer" className="img-fluid" />
              <p className="mt-4 text-white w-75">Enjoy instant credit and debit alerts for both parties when you send or receive money to loved ones or your favourite merchants.</p>
            </div>
            <div className="col-sm-6">
              <img src={phone} alt="Instant Transfer" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row mt-9 justify-content-between">
          <div className="col-sm-6 mb-3">
            <div className="zc">
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <h4 className="text-white">Zero Charges</h4>
                  <p className="mt-4 text-white w-75">With Stackivy's Curved, there are zero charges and no hidden costs. You can expect our best service and monthly interest on your money.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="zc orange">
              <div className="row justify-content-center">
                <div className="col-sm-11">
                  <h4 className="text-white">Invest with Ease</h4>
                  <p className="mt-4 text-white w-75">Take low risks investments with great rewards on Curved. Bonds, fixed deposits, and savings plans with mouthwatering returns ensure your money is making money on Curved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstantTransfer;
