import learn from "../assets/learnimg.svg";

function LearnEarn() {
  return (
    <section className="learnearn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <h2 className="text-white">Learn & Earn Financial Freedom</h2>
            <h6 className="mt-4 text-white">Learn and earn your way to financial freedom through this dynamic learning platform, where we have<br/>financial experts break down wealth building strategies into easily digestible financial nuggets.</h6>
            <img src={learn} alt="learn" className="img-fluid w-100 mt-5" style={{marginBottom: "-18px"}} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnEarn