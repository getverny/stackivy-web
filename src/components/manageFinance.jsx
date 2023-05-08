
import manage from "../assets/myf.svg";
import fm from "../assets/myfs.svg";


function ManageFinance() {
  return (
    <section className="paylater">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 mb-3 mt-9">
            <img src={fm} alt="manage your finance" className="img-fluid animate__animated animate__slideInLeft animate__fast" />
            <h6 className="my-5">Manage your financial system with ease on Stackivy's Onescurd. Get great insights and financial tips to help navigate and control your company's finances.</h6>
          </div>
          <div className="col-sm-6">
            <img src={manage} alt="manage your finance" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageFinance;
