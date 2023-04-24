import box from "../assets/box.svg";

function FlexLending() {
  return (
    <section className="flex-lending">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h1>Flexible <span className="lend">Lending</span></h1>
            <p style={{marginTop: "34px" , marginBottom: "75px"}}>At Hargon, we recognize that every business or personal financial situation is unique. That is why we offer a wide range of flexible lending solutions to match your specific need as close as possible. Whether it is a long-term loan, short-term loan or buy now, pay later type of situation, Hargon has got you covered.</p>
            <button
              className="btn btn-primary btn-grad rounded-pill px-5 py-4"
              to=""
            >
              Get Loans Now
            </button>
            <img src={box} alt="box" className="img-fluid w-100 mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlexLending;
