import market from "../assets/market.svg";



function CryptoSaving() {
  return (
    <section className="tradecrypto csave">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-7 mb-3">
            <p className="text-white">You can earn mouthwatering interest when you save and invest your cryptocurrency on Stackivy's trading platform-Zettarh.</p>
            <img src={market} alt="markrt" className="img-fluid mt-4 w-100" />
          </div>
          <div className="col-sm-4 text-center">
            <h6 className="text-white">PERSONAL</h6>
            <h2 className="text-white">Crypto Savings</h2>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default CryptoSaving;
