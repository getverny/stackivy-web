import fin from "../assets/heroimg.svg";


function FinHero() {
  return (
    <section className="fin-hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 mb-3">
            <h2>Learn From The Best Financial Minds</h2>
            <h6 className="my-4">Make your journey to financial freedom worthwhile with financial education. The best part of financial education on stackivy is that there is always something new to learn. At Stackivy, we have created a range of resources from the best financial minds to fuel your journey, enabling you to expand your knowledge and make informed decisions with your money.</h6>
          </div>
          <div className="col-sm-5">
            {/* <img src={fin} alt="financial" className="img-fluid w-100" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinHero;
