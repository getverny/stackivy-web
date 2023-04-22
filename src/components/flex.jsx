import flex from "../assets/paysmall.svg";
import flexible from "../assets/flex.svg";

function Flex() {
  return (
    <section className="flex">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-sm-5">
            <img src={flex} alt="loan-interest" className="img-fluid w-100"  />
          </div>
          <div className="col-sm-5 mt-5">
            <img src={flexible} alt="loan-interest" className="img-fluid w-100" style={{marginLeft: "-37px"}} />
            <p>Taking out a loan is stressful enough; paying it back shouldn't. At Hargon, we have flexible payment options for your loans that guarantee you can pay back your loans with relative ease and at your convenience.</p>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
              to=""
            >
              Get loans now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flex