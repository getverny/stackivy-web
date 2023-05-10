import future from "../assets/future.svg";


function ExposingKid() {
  return (
    <section className="exposing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-7 mb-3 text-center">
            <img src={future} alt="Exposing your kids to a better financial future" className="img-fluid" style={{marginTop: "-140px"}} />
            <h6 className="mt-5">Experts think getting started early in financial education makes a world of difference. We tend to agree.</h6>
            <h6 className="mt-3">Keed is Stackivy's financial learning platform for kids between 5 and 12 on . Keeds exposes the allure of a better financial future, thereby getting them started on financial freedom very early.</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExposingKid;
