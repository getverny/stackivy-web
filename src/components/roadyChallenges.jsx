import dot from "../assets/dot-c.svg";
import right from "../assets/road.png";
import challenges from "../assets/rchall.svg";

function RoadyChallenges() {
  return (
    <section className="challenges-sec roady-cha">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <img src={challenges} alt="challenges" className="img-fluid" />
            <div className="mt-5">
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={62} /></div>
                <div><p>As a delivery service company, Roady has customers in Lagos state's urban and rural communities. The downside is that the company has to deal with clients in remote regions where network services may not be great. The bad network limits their client's payment options which may not always be</p></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={26} /></div>
                <div><p>Providing more payment solutions for national and international clients Managing financial transactions and records </p></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={45} /></div>
                <div><p>It is also no secret that limitations in payment tend to drive customers away. They don't want to and shouldn't have to deal with that.So providing their customers with suitable payment options was a core issue for Roady.</p></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={66} /></div>
                <div><p>Another issue for the company was dealing with so many transactions, and customer requests that the company was starting to have difficulty tracking them all. One might think they could hire more people to help, but that wouldn't cut it, especially when the finance department was having issues tracking down sales records.</p></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={30} /></div>
                <div><p>Finally, the company was growing rapidly and needed financing to expand its existing fleet to take on more jobs and clear existing backlogs.</p></div>
              </div>
              <p className="mb-3 fw-bold">In summary, they wanted</p>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={45} /></div>
                <div><p>It is also no secret that limitations in payment tend to drive customers away. They don't want to and shouldn't have to deal with that.So providing their customers with suitable payment options was a core issue for Roady.</p></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={71} /></div>
                <div><p>Another issue for the company was dealing with so many transactions, and customer requests that the company was starting to have difficulty tracking them all. One might think they could hire more people to help, but that wouldn't cut it, especially when the finance department was having issues tracking down sales records.</p></div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={30} /></div>
                <div><p>Finally, the company was growing rapidly and needed financing to expand its existing fleet to take on more jobs and clear existing backlogs.</p></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-9">
            <img src={right} alt="challenges" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadyChallenges;
