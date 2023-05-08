
import tax from "../assets/invoice.png";


function Invoicing() {
  return (
    <section className="paylater" style={{background: "#FFF9EE"}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-9">
            <h2 className="">Invoicing</h2>
            <h6 className="mt-5">Generate custom-built invoices for clients and maintain a record of all transactions with every client using Onwa's invoicing platform</h6>
          </div>
          <div className="col-sm-6">
            <img src={tax} alt="manage your finance" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Invoicing;
