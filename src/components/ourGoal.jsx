import ourgoal from "../assets/ourgoal.png";

function OurGoal() {
  return (
    <section className="our-goal">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-2 text-center">
            <img src={ourgoal} alt="ourgoal" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-7 text-center">
            <p>By integrating our financial products and leveraging emerging technologies, we aim to create a financial ecosystem that transcends industry boundaries.</p>
            <p>Our goal with this financial ecosystem is to promote seamless transactions for people and businesses across the continent while empowering them for financial independence, convenience, and security.</p>
            <p>We aim to be the trusted partner and enabler of financial connectivity, making financial services accessible and driving economic progress throughout Africa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurGoal