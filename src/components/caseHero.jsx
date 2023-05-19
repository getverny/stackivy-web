import hero from "../assets/hero.png";

function CaseHero() {
  return (
    <section className="case-hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <h2 className="cb">CASE-STUDIES</h2>
            <h3 className="mb-5">Check out our Case studies for informations</h3>
            <img src={hero} alt="Empowering a travel agency to do more through tailored financial solutions" className="img-fluid w-100 mb-5 animate__animated animate__slideInLeft animate__fast" />
            <p className="mt-4">Leapsail is a fast-growing travel agency in Lagos, Nigeria. The company has provided convenient and seamless travel solutions to thousands<br/>of customers. Their travel solutions include visa application, presentation, and travel documentation. With the world economy opening up, they intend<br/>to help more people with their travel needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseHero;
