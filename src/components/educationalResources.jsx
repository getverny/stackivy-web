import keed from "../assets/kid.svg";
import right from "../assets/keedright.svg";
import left from "../assets/keedleft.svg";



function EducationResources() {
  return (
    <section className="education">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h2>Make the most of your money with <span className="edu">Stackivy's educational resources</span></h2>
            <h6 className="mt-4">Explore the various resources we offer for your wealth building journey, including articles, videos, podcasts, and <br/>online courses <span className="edu">through our tools Keed and Ardilla</span></h6>
          </div>
        </div>
        <div className="row toppings justify-content-between">
          <div className="col-sm-6 mb-3 mt-4">
            <img src={keed} alt="keed" className="img-fluid" />
            <p className="my-5">Experts say starting financial education early sets you up for a lot of financial success in the future. Through all our numerous surveys and research, we are inclined to agree. That is why we launched Keed. A financial learning platform where kids can get started on financial education, setting them up for a lot of success in the future. It is free, fun, and comes with a lot of rewards.</p>
            <button
              className="btn btn-primary btn-000 rounded-pill px-5 py-4"
              to=""
            >
              Keeds For Kids
            </button>
          </div>
          <div className="col-sm-5">
            <img src={right} alt="keed" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row toppings justify-content-between">
          <div className="col-sm-5 mb-3">
            <img src={left} alt="keed" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mt-5">
            <h3>Ardilla</h3>
            <p className="my-5">Our Dilla learning platform leverages some of the best financial and educational minds on the continent to get you the financial educational resources you need. Going through our platform and taking advantage of our learning resources such as the articles, videos, and financial quizzes, equips you for the best possible outcome on your search for financial freedom.</p>
            <button
              className="btn btn-primary btn-000 rounded-pill px-5 py-4"
              to=""
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationResources;
