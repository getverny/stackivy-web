import sync from "../assets/sync.svg";
import ring from "../assets/ring.png";



function Sychronize() {
  return (
    <section className="microhero sync">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={sync} alt="personal" className="img-fluid" />
            <h6 className="mt-4">With Curved, your business can enjoy synchronized banking solutions that automate recurring operational expenses and helps your business generate its financial reporting and balance sheets</h6>
            
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-7 text-center">
              <img src={ring} alt="personal" className="img-fluid w-100 mt-9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sychronize;
