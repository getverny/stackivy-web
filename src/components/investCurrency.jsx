import phone from "../assets/yes.svg";


function InvestCurrency() {
  return (
    <section className="investcurrency pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h6 className="text-white">BUSINESS</h6>
            <h2 className="text-white my-4">Invest in cryptocurrencies</h2>
            <p className="text-white mb-5">Are you looking to diversify your company's investments? Zettarh has just the right investing opportunity. With Zettarh, you can invest in cryptocurrencies and have the opportunity to earn big. It is a low risk investment with amazing rewards.</p>
            <img src={phone} alt="phone" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestCurrency;
