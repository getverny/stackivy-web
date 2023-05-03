import market from "../assets/market.svg";



function TradeCrypto() {
  return (
    <section className="tradecrypto">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-4 text-center mb-3">
            <h6 className="text-white">PERSONAL</h6>
            <h2 className="text-white">Trade Crypto</h2>
          </div>
          <div className="col-sm-7">
            <p className="text-white">Are you looking for a fun but rewarding side hustle? Join the massive community of members making decent money on Zettarh by trading Cypto. Enjoy all the perks of trading and none of the downsides.</p>
            <img src={market} alt="markrt" className="img-fluid mt-4 w-100" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default TradeCrypto;
