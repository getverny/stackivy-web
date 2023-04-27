import personal from "../assets/personal.svg";

function BeFree() {
  return (
    <section className="befree">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img src={personal} alt="title" className="img-fluid w-75" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeFree