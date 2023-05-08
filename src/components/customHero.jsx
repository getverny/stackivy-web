
import custom from "../assets/custom.svg";


function CustomHero() {
  return (
    <section className="custom-hero pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2 className="animate__animated animate__slideInDown animate__fast">Custom Made <span className="all-in-one">Financial Management</span> Solutions for <span className="all-in-one">business</span></h2>
            <h6 className="my-5">Unleash the power of custom-tailored financial solutions for your business. With Onescurd's financial management solutions and strategies, you can take your company's finances to the next level. Our solutions are unique to your business needs.</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: 'linear-gradient(117.04deg, #0C6B8A -13.79%, #FFCC00 131.52%)'}}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-sm-12 text-center">
            <img src={custom} alt="custommade" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomHero;
