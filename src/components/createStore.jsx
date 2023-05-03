import barcode from "../assets/house.svg";


function CreateStore() {
  return (
    <section className="createstore">
      <div className="container">
        <div className="row justify-content-between qrcode">
          <div className="col-sm-5 mt-9">
            <h3 className="mb-4">Create a Store and
            <br/>Start <span className="pr">Accepting Payments.</span></h3>
            <p>Set up your virtual store on Pomelo and instantly get paid for your beautiful products online. With Pomelo, you do not have to handle the stress of hosting your stores and processing payments, making your business operations and payment activity with your customers a seamless experience.</p>
          </div>
          <div className="col-sm-5">
            <img src={barcode} alt="barcode" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateStore;
