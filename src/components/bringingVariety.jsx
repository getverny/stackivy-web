import per from "../assets/per.svg";
import title from "../assets/bring.svg";
import phones from "../assets/phone.div.svg";
import barcode from "../assets/scancode.svg";


function VarietyB() {
  return (
    <section className="varietyb">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={per} alt="personal" className="img-fluid" />
          </div>
        </div>
        <div className="bringbg mt-5 pb-0 animate__animated animate__slideInRight animate__fast">
          <div className="row justify-content-center">
            <div className="col-sm-8 text-center">
              <img src={title} alt="Bringing variety to payment
              processing" className="img-fluid" />
              <p className="text-white my-5">Pomelo is bringing variety to payment processing. Our payment process is not only faster, better, and more convenient for your customers, Payment can be processed through multiple mediums.</p>
              <img src={phones} alt="phones" className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="row mt-9 justify-content-between qrcode">
          <div className="col-sm-5 mb-3">
            <img src={barcode} alt="barcode" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-9">
            <h6>Pomelo Features</h6>
            <h3 className="my-4">Pay by Link<br/><span className="pr">QRcode</span></h3>
            <p>With Pomelo, your business can cut down long queues and say goodbye to card rejections and long transfer wait times by introducing our QRcode payment links. You can now serve your customers faster and better.</p>
            <p className="mt-2">Our QRcode payment link gives you the option you need. It is a secure and convenient mode of payment for you and your business</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VarietyB;
