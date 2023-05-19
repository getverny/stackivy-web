import dot from "../assets/c.svg";
import right from "../assets/right.png";
import challenges from "../assets/challenges.svg";

function Challenges() {
  return (
    <section className="challenges-sec">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <img src={challenges} alt="challenges" className="img-fluid" />
            <div className="mt-5">
              <div className="d-flex flex-row mb-4">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={45} /></div>
                <div><p>As implied earlier, the company offers a variety of travel solutions to thousands of customers monthly, which is great for business. However, they were facing some problems with their finances</p></div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={28} /></div>
                <div><p>Providing more payment solutions for national and international clients Managing financial transactions and records </p></div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={45} /></div>
                <div><p>As you would imagine, dealing with so many clients or customers sometimes complicates their financial records and bookkeeping, leading to stressful financial audits and tax reporting.</p></div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={45} /></div>
                <div><p>As you would imagine, dealing with so many clients or customers sometimes complicates their financial records and bookkeeping, leading to stressful financial audits and tax reporting.</p></div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div className="me-3"><img src={dot} alt="bullet" className="img-fluid" width={35} /></div>
                <div><p>For a travel agency, focusing and stressing on finances seems to divert the attention of the agency's talents from what they would ordinarily love to do.</p></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={right} alt="challenges" className="img-fluid animate__animated animate__slideInRight animate__fast" style={{marginLeft: "190px", marginTop: "-71px"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenges;
