import left from "../assets/arrow-left.svg";


function Learn() {
  return (
    <section className="learn">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1 className="text-white mb-3">Learn how stackivy all-in-one <span className="wfy">works for you</span></h1>
            <h6 className="text-white">Whether you're an individual, small business owner, or enterprise, our solutions can help you save time, streamline your<br/>finances, and achieve your financial goals.</h6>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-4 mb-3">
            <div className="slider-card">
              <h4 className="mb-4">Financial solutions for Individual</h4>
              <p>Discover how Stackivy's all-in-one financial solutions can help you manage your money and invest for the future. With our products, you can manage your finances, track your expenses, invest in your future, get a loan, save for a rainy day or plan for retirement all in one place. Stackivy has the tools to help you achieve your financial goals.</p>
              <img src={left} alt="arrow" className="img-fluid mt-9" />
            </div>
          </div>
          <div className="col-sm-4 mb-3 mid">
            <div className="slider-card">
              <h4 className="mb-4">Financial solutions for small businesses</h4>
              <p>Our financial solutions come with no strings attached, giving you the flexibility you need to take your business to the next level on your terms. You may think of us as the silent partner invested in helping your business become the best version of itself.</p>
              <img src={left} alt="arrow" className="img-fluid " style={{marginTop: "110px"}}  />
            </div>
          </div>
          <div className="col-sm-4 mb-3 last">
            <div className="slider-card">
              <h4 className="mb-4">Financial solutions for enterprises</h4>
              <p>Tailor Stackivy's customizable all-in-one financial solution to fit the complex financial needs of your large organization.</p>
              <img src={left} alt="arrow" className="img-fluid" style={{marginTop: "170px"}} />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Learn