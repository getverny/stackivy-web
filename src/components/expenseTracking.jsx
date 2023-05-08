
import expense from "../assets/expense.svg";


function Expense() {
  return (
    <section className="paylater pb-0" style={{background: "#FFF9EE"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h2 className="">Expense tracking</h2>
            <h6 className="mt-5">Are you tired of losing track of your company's expense data and reports? With Onwa, you can now keep track of your company's expenses more efficiently with detailed information on every expense data.</h6>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-11 text-center">
           <img src={expense} alt="Expense Tracking" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expense;
