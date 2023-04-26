import stack from "../assets/stack.svg"
import diamond from "../assets/dia.svg"
import two from "../assets/two.svg"
import three from "../assets/three.svg"
import four from "../assets/four.svg"


function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <h3 className="mb-4">Benefits of using <img src={stack} alt="stackivy" className="img-fluid mt-1" /></h3>
            <p>4 reasons why our budgeting tool works for you</p>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-3 mb-3">
            <div className="benefit-cards text-center">
              <img src={diamond} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Build wealth better, faster, and easier</h4>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="benefit-cards text-center">
              <img src={two} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Save and Invest<br/>better</h4>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="benefit-cards text-center">
              <img src={three} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Pay back loans with<br/>ease</h4>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="benefit-cards text-center">
              <img src={four} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Track and control<br/>your expenses</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
