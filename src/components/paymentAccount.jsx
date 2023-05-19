import pay from "../assets/paymentaccount.png";

function PaymentAccount() {
  return (
    <section className="acc-sec pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 px-0">
            <img src={pay} alt="revenue" className="img-fluid" />
          </div>
          <div className="col-sm-8 mt-9">
            <h2 className="text-white mb-4">Solution</h2>
            <p className="text-white w-75">After a series of meetings with the customers, where we tried to understand and streamline their financial challenges, we decided that the best course of action was to offer them complete versions of our financial products, as mentioned earlier.</p>
            <p className="text-white w-75 my-4">We offered Pomelo as a payment gateway for card payments and e-wallets. We offered Nearly as an additional payment option to enable customers in remote regions of the state to transact efficiently with the company.</p>
            <p className="text-white w-75">Taking their last two challenges into consideration, we offered them Onwa's bookkeeping to give them a handle on their financial transactions. Finally, we provided Hargon's credit solutions to help them expand and grow their customer base.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentAccount;
