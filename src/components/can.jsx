import sync from "../assets/multi.svg";
import ring from "../assets/can-phone.svg";



function CAN() {
  return (
    <section className="microhero can-acc pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={sync} alt="personal" className="img-fluid" />
            <h6 className="mt-4">Your CAN doubles as an account number and your unique ID for all Stackivy's platforms.</h6>
            <h6 className="mt-2">With CAN, you can send and receive money like a regular account. You also get discounts on Stackivy tools and will be the first to know when we launch new products.</h6>
            <img src={ring} alt="personal" className="img-fluid w-100 mt-9" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CAN;
