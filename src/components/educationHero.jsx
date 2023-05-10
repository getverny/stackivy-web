import edu from "../assets/edu.png";


function EducationHero() {
  return (
    <section className="education-hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <h2 className="animate__animated animate__slideInDown animate__fast">Making <span style={{color: "#045A9D"}}>Education</span><br/>Fun Again</h2>
            <h6 className="my-5">Are you tired of the constant headaches and annoying bureaucratic systems that plague you when making or receiving school fees and other educational-related charges?  We have solutions you will like</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: '#045A9D'}}
            >
              Get started
            </button>
          </div>
          <div className="col-sm-6">
            <img src={edu} alt="doctor" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationHero;
