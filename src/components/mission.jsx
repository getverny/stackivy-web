import mission from "../assets/flag.png";
import vision from "../assets/vision.png";


function Mission() {
  return (
    <section className="miss">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <span className="mis"><span className="">Mission</span></span>
            <h2 className="mt-4 all-in-one">The Mission</h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          <div className="col-sm-5">
            <p>We want to revolutionize financial connectivity on the African continent and make access to financial tools simplified and more convenient for everyone, irrespective of their environmental or financial background.</p>
            <p className="my-4">We aim to accomplish this revolution by creating a centralized hub that offers seamless access to wide-ranging financial services, empowering individuals and businesses to take their financial destinies into their hands and aim for greatness.</p>
            <p>In line with this, every user has a unique code that serves as a universal identifier on all stackivy products and account numbers, simplifying financial transactions and fostering financial inclusion across the continent.</p>
          </div>
          <div className="col-sm-6">
            <img src={mission} alt="mission" className="img-fluid mission-img w-100" />
          </div>
        </div>
        <div className="row toppings justify-content-between">
           <div className="col-sm-5">
            <img src={vision} alt="mission" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-9">
            <span className="mis"><span className="">Vision</span></span>
            <h2 className="mt-4 all-in-one">The Vision</h2>
            <p className="mt-5">Our vision is to be the leading catalyst for financial innovation and connectivity in Africa.</p>
            <p className="my-4">Africa is the fastest-rising economy in the world, and every economy depends on robust financial solutions for businesses and individuals within that economy.</p>
            <p>This means Africa is ripe for financial innovations, and we want to be in the driver's seat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
