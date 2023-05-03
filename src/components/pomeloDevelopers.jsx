import barcode from "../assets/globals.svg";
import dev from "../assets/pomelodev.svg";


function PomeloDevelopers() {
  return (
    <section className="createstore">
      <div className="container">
        <div className="row justify-content-between qrcode">
          <div className="col-sm-5 mt-9">
            <img src={dev} alt="barcode" className="img-fluid mb-4" />
            <p>Integrate pomelo into your applications and enjoy simulation perks like dummy accounts and wallets, mocked data for virtual cards and transfers.</p>
            <p className="mt-3">The process is simple and straight forward. To get started, configure your integration and complete your kyc</p>
          </div>
          <div className="col-sm-5">
            <img src={barcode} alt="barcode" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PomeloDevelopers;
