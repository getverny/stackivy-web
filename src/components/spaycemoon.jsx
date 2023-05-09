
import title from "../assets/spay.svg";
import wallet from "../assets/wallet.png";
import savings from "../assets/savings.png";
import users from "../assets/users.png";
import stocks from "../assets/stocks.png";
import charge from "../assets/charges.png";
import crypt from "../assets/crypto.png";
import payment from "../assets/payment.png";
import transaction from "../assets/transaction.png";

function Spaycemoon() {
  return (
    <section className="spaycemoon">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src={title} alt="do more" className="img-fluid" />
            <p className="text-white mt-4">Discover various API connections</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="row mb-3">
            <div className="col-sm-3 mb-3">
              <div className="do-more">
                <img src={wallet} alt="wallet" className="img-fluid" width={80} />
                <h4 className="my-4">Wallets</h4>
                <h6>Access basic cash reserve functionalities where users can make or receive payments</h6>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="do-more">
                <img src={savings} alt="wallet" className="img-fluid" width={64} />
                <h4 className="my-4">Savings</h4>
                <h6>Various automated saving systems and algorithms that enable your users to get to where they need to be financially.</h6>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="do-more">
                <img src={users} alt="wallet" className="img-fluid" width={52} />
                <h4 className="my-4">Account Numbers</h4>
                <h6>An automated system that generates unique numbers for your customers without repeating itself.</h6>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="do-more">
                <img src={stocks} alt="wallet" className="img-fluid" width={56} />
                <h4 className="my-4">Stocks</h4>
                <h6>A unique algorithm that reads and analyzes market behaviour in real-time while adjusting companies' value.</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 mb-3">
              <div className="do-more">
                <img src={charge} alt="wallet" className="img-fluid" width={55} />
                <h4 className="my-4">Charge Authorization</h4>
                <h6>Access basic cash reserve functionalities where users can make or receive payment</h6>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="do-more">
                <img src={crypt} alt="wallet" className="img-fluid" width={60} />
                <h4 className="my-4">Crypto</h4>
                <h6>A robust digital currency platform that can integrate with your applications and enable users to buy, sell, and make payments with crypto.</h6>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="do-more">
                <img src={transaction} alt="wallet" className="img-fluid" width={62} />
                <h4 className="my-4">Transactions</h4>
                <h6>A record-keeping system which allows your app to keep track of user transactions.</h6>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="do-more">
                <img src={payment} alt="wallet" className="img-fluid" width={61} />
                <h4 className="my-4">Payment</h4>
                <h6>Payment gateways for your applications. Allows users to make and receive payments on your app.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spaycemoon