import plus from "../assets/props.png";



function StackivyCommunity() {
  return (
    <section className="stack-ivy">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-9 mb-3">
            <h2 className="mb-5 text-white">Stackivy Community</h2>
            <h6 className="w-75 text-white mb-5">A community of like minds breaking barriers, Join the best financial minds and businesses leveraging technology across the African continent to build and develop sustainable financial products. Stackivy's community is a financial forum where you can trade ideas and ask burning questions related to the fintech space.</h6>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4" style={{color: "#35FF49"}}
            >
              Join our community now
            </button>
          </div>
          <div className="col-sm-6">
            <img src={plus} alt="community" className="img-fluid w-100" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default StackivyCommunity;
