import bix from "../assets/bix.svg";



function GrowBusiness() {
  return (
    <section className="">
      <div className="container bg-white">
        <div className="row">
          <div className="col-sm-6">
            <img src={bix} alt="business" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-6 text-center left-side">
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <h2 className="text-white mb-4">Grow your business</h2>
                <h6 className="text-white">With Stackivy, you have access to affordable credit solutions that gives you the resources you need to grow and expand your business reach.</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 right-side"></div>
        </div>
      </div>
    </section>
  );
}

export default GrowBusiness;
