import talk from "../assets/talk.svg";


function Footer() {
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="footer-top">
              <h4 className="text-white">Building the next big thing?</h4>
              <h6 className="text-white my-4">Stackivy is interested in speaking with companies who want to build<br/>tech-enabled products and platforms.</h6>
              <img src={talk} alt="let-talk" className="img-fluid float-end" />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <div className="container"></div>
      </footer>
    </section>
  )
}

export default Footer