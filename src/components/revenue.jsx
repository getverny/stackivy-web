import hero from "../assets/objects.png";

function Revenue() {
  return (
    <section className="revenue-sec ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 px-0">
            <img src={hero} alt="revenue" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Revenue;
