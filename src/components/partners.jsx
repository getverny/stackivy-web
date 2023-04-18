import logos from "../assets/logos.svg";

function Partners() {
  return (
    <section className="partners bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h4>Discovery</h4>
            <h1 className="mb-5">Partners</h1>
            <img src={logos} alt="logos" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners