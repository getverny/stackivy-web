import title from "../assets/title-micro.svg";
import right from "../assets/micro-img.svg";



function MicroHero() {
  return (
    <section className="microhero">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={title} alt="title" className="img-fluid" />
            <h6 className="mt-5 w-75">Tracking and controlling your finances plays a significant role in wealth building. However, it can be quite challenging, especially when there is a lot you need to do with your money. Fortunately, at Stackivy, we have created a couple of budgeting tools to help you easily manage your finances. Our user-friendly budgeting tools, infused with advanced features</h6>
          </div>
          <div className="col-sm-6">
            <img src={right} alt="icons" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicroHero;
