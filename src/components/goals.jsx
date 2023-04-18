import title from "../assets/title.svg";

function Goal() {
  return (
    <section className="goals">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={title} alt="title" className="img-fluid" />
            <h6 className="mt-4 text-white">Whether you're a small business owner looking for financing solutions or a Parent looking to teach your kids about financial management, we've got you covered. </h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goal