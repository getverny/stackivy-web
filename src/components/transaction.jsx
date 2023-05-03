import phone from "../assets/ether.svg";


function Transaction() {
  return (
    <section className="investcurrency tr">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h6 className="text-white">BUSINESS</h6>
            <h2 className="text-white my-4">Transact in Crypto</h2>
            <p className="text-white mb-5">Businesses now have the luxury of serving customers with cryptocurrencies and making all operational expenses with crypto. Our platform is safe and makes your business more accessible to more customers.</p>
            <img src={phone} alt="phone" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transaction;
