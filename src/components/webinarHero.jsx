import startup from "../assets/three.png";


function WebinarHero() {
  return (
    <section className="webinarhero">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mt-9">
            <h2 className="text-white">Journey with us as<br/>we explore the future<br/>of finance</h2>
            <h6 className="mt-5 text-white">We are excited to have you be a part of a community of like minds identifying innovative financial solutions that are tailored for the Africa market</h6>
          </div>
          <div className="col-sm-6">
            <img src={startup} alt="startup" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebinarHero;
