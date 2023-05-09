
import doc from "../assets/doc.png";

function Documentation() {
  return (
    <section className="documentation access">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={doc} alt="documentation" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-9">
            <h2 className="text-white">Documentation</h2>
            <p className="text-white mt-5 w-75">Welcome to the Spaycemoon Developer Documentation where you’ll learn how to build amazing financial experiences with the our APIs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentation