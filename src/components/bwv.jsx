import spark from "../assets/spark.svg";
import stream from "../assets/streamline.svg";
import payment from "../assets/payment.svg";

function BWV() {
  return (
    <section className="bwv">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h3 className="mb-4">Business With Vernde</h3>
            <p className="">Your company can now enjoy favourable forex rates when conducting business internationally, allowing your company to negotiate and close deals from a place of strength. Vernde comes with the added benefit of security that ensures your money gets to the right place, everytime</p>
          </div>
        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-sm-5 mb-3 mt-9">
            <h6 className="mb-4"><span className="cb">Instant</span> Payment Confirmations</h6>
            <p className="">With Vernde, you can enjoy the peace of mind that comes with instant payment confirmations. Our platform ensures that you're notified as soon as a payment is made, so you can take action right away.</p>
          </div>
          <div className="col-sm-3">
            <img src={spark} alt="spark" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-around mt-9">
          <div className="col-sm-3 text-end">
            <img src={stream} alt="spark" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-9">
            <h6 className="mb-4"><span className="cb">Streamline</span>Reconciliation</h6>
            <p className="">Reconciling payments can be a time-consuming process, but Vernde makes it easy. Our platform streamlines the reconciliation process, saving you time and making it easier to keep your records accurate.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-9">
          <div className="col-sm-5 mb-3 mt-9">
            <h6 className="mb-4">Build<span className="cb"> Custom Payment </span>Experiences</h6>
            <p className="">Vernde's well-documented APIs allow you to create custom payment experiences that are tailored to your customers' needs. From checkout pages to mobile apps, you can build a seamless payment experience that integrates seamlessly with your existing systems.</p>
          </div>
          <div className="col-sm-3">
            <img src={payment} alt="spark" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BWV