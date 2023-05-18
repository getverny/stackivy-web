import careers from "../assets/careers.png";


function CareersHero() {
  return (
    <section className="careers-hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-5 mb-3">
            <h2 className="text-white w-75">Be a part of <span style={{color: "#22C55E"}}>something great</span></h2>
            <h6 className="mt-5 text-white w-87">At Stackivy, we are more than just a business or workplace. We are a team of people building together with the sole purpose of transforming finance in Africa. We cannot do it alone, so we need your talents and input.</h6>
          </div>
          <div className="col-sm-6">
            <img src={careers} alt="career" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersHero;
