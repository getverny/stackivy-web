import barcode from "../assets/globals.svg";
import dev from "../assets/pomelodev.svg";


function PomeloWallet() {
  return (
    <section className="pomelowallet bg-white">
      <div className="container">
        <div className="row justify-content-between qrcode">
          <div className="col-sm-5 mb-3">
            <h3 className="mb-4"><span className="pr">Pomelo</span>Wallet</h3>
            {/* <img src={barcode} alt="barcode" className="img-fluid w-100" /> */}
          </div>
          <div className="col-sm-5">
            <p>Are you tired of constantly inputting your credit cards when shopping online or paying bills? With Pomelo, you never have to do that again. Pomelo Wallet lets you hold money for all your online activities, including shopping, paying bills, and sending or receiving money across all platforms.</p>
            <p className="mt-3">With Pomelo wallets, you can now enjoy more shopping flexibility. You can buy more and spend without restrictions on your favourite stores.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default PomeloWallet;
