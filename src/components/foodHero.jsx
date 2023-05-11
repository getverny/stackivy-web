import { Link } from "react-router-dom";
import burger from "../assets/burger.png";




function FoodHero() {
  return (
    <section className="foodhero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-9">
            <h2>Innovative financial<br/><span style={{color: "#FC6011"}}>food service</span><br/>solutions</h2>
            <p className="mt-4 mb-5 w-75">Stackivy is committed to ensuring access to food for everyone on the continent. That is why we are creating sustainable financial solutions for businesses in the food industry.</p>
            <Link
              className="btn btn-primary btn-main rounded-pill px-5 py-4"
              to="" style={{background: "#FC6011"}}
            >
              Start Learning
            </Link>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={burger} alt="food" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodHero