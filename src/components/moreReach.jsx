import mr from "../assets/phone&text.svg";
import bis from "../assets/bis.svg";



function MoreReach() {
  return (
    <section className="morereach">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src={bis} alt="personal" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-7 mb-3">
            <img src={mr} alt="MoreReach" className="img-fluid" />
          </div>
          <div className="col-sm-4 mr-top">
            <p className="w-75">With Curved's financial backing, your business has more opportunities for expansion, growth and the ability to reach more customers and expand its influence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreReach;
