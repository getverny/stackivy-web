import imp from "../assets/ra.svg";
import fs from "../assets/fs.svg";
import pb from "../assets/pb.svg";
import sm from "../assets/sm.svg";

function GoPersonal() {
  return (
    <section className="gopersonal">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5" style={{marginTop: "200px"}}>
            <h3>Go Personal With <span className="cb">Vernde</span></h3>
            <p className="mt-4">Your company can now enjoy favourable forex rates when conducting business internationally, allowing your company to negotiate and close deals from a place of strength. Vernde comes with the added benefit of security that ensures your money gets to the right place, everytime</p>
          </div>
         <div className="col-sm-6 steppings">
            <div className="stepper d-flex flex-column ml-2">
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center desktop">
                  <div className="mb-2">
                    <img src={imp} alt="01" className="img-fluid" width="100px" />
                  </div>
                  <div className="lines h-100"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h6 className="text-dark">Receive Allowance</h6>
                  <p className="lead">Your company can now enjoy favourable forex rates when conducting business internationally, allowing your company to negotiate and close deals </p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center desktop">
                  <div className="mb-2">
                    <img src={fs} alt="01" className="img-fluid" width="100px" />
                  </div>
                  <div className="lines h-100"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h6 className="text-dark">Shop From Your Favourite Stores</h6>
                  <p className="lead">Your company can now enjoy favourable forex rates when conducting business internationally, allowing your company to negotiate and close deals </p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center desktop">
                  <div className="mb-2">
                    <img src={pb} alt="01" className="img-fluid" width="100px" />
                  </div>
                  <div className="lines h-100"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h6 className="text-dark">Pay Bills And Make Other Payments</h6>
                  <p className="lead">Your company can now enjoy favourable forex rates when conducting business internationally, allowing your company to negotiate and close deals </p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center desktop">
                  <div className="mb-2">
                    <img src={sm} alt="01" className="img-fluid" width="100px" />
                  </div>
                  <div className="lines h-100 d-none"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h6 className="text-dark">Send Money To Loved Ones</h6>
                  <p style={{paddingTop: "20px"}}>Your company can now enjoy favourable forex rates when conducting business internationally, allowing your company to negotiate and close deals </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoPersonal