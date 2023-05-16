
import sus from "../assets/buildsus.png";
import dot from "../assets/dot.svg";



function Upcoming() {
  return (
    <section className="upcoming">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <span className="closed" style={{background: "#E1EDF4", color: "#000"}}>UPCOMING EVENTS</span>
            <h2 className="mt-3">Get your spot for our next programs</h2>
            <p className="mt-4">With sustainability being all the rage around the world, how do we channel some of that responsibility into building sustainable financial solutions for customers across the continent? </p>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-4">
            <div className="webinar-card">
              <h4>WEBINARS</h4>
              <h5 className="mt-3">Leveraging Technology to Change the Future of Finance in Africa</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upcoming