import fone from "../assets/500.svg";

function Alt() {
  return (
    <section className="alt pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h3 className="text-white mb-4">Best alternative to receiving physical cash</h3>
            <p className="text-white mb-5">Looking for an alternative to physical cash? With Vernde, you can easily receive digital payments, making transactions simpler and safer than ever before.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-5 text-center">
            <img src={fone} alt="phone" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alt