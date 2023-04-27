import personal from "../assets/business.svg";
import flag from "../assets/lock.svg";
import is from "../assets/is.svg";

function InvestmentSecurity() {
  return (
    <section className="befree">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img src={personal} alt="title" className="img-fluid w-75" />
          </div>
        </div>
        <div className="row mt-9 justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <img src={is} alt="invest" className="img-fluid" />
            <p className="my-5">As your business expands, you are more likely to need the comfort that an investment security provides irrespective of size of the size of your company. At Stackivy we have provided a unique platform that guarantees the security of your company's investment by leveraging on technological advancements to instantly analyze and generate expert results on investment strategies.</p>
            <a
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              href="#startbuilding" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Get Financially secured
            </a>
          </div>
          <div className="col-sm-6">
            <img src={flag} alt="flag" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentSecurity