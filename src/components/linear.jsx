import why from "../assets/man.svg";

function Linear() {
  return (
    <section className="linear">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-8">
            <img src={why} alt="why" className="img-fluid mb-4" />
            <p className="text-white">Our wealth management platform allows you</p>
            <div className="toppings" id="cont">
              <div id="flip">
                <div><div className="text-white carou">Build sustainable wealth</div></div>
                <div><div className="text-white carou">Manage your expenses</div></div>
                <div><div className="text-white carou">Helps you with a succession plan</div></div>
                <div><div className="text-white carou">Gives you lots of options</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Linear