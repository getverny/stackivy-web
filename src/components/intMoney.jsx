import vernde from "../assets/ver.svg";
import apple from "../assets/apple.png";


function IntMoney() {
  return (
    <section className="intmoney pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={vernde} alt="vernde" className="img-fluid mb-4" />
            <h2 className="cb">International money made easy</h2>
          </div>
          <div className="col-sm-6" style={{marginTop: "70px"}}>
            <p className="text-white">Stackivy's cross-border payment solution. You can use our cross-border payment solutions and start processing fees and related charges for schools and other educational institutions.</p>
            <p className="text-white mt-2">Vernde makes it easy, convenient, and cheaper.</p>
          </div>
        </div>
        <div className="row mt-9 justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={apple} alt="phone" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntMoney;
