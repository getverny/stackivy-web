import people from "../assets/people.png";

function BePart() {
  return (
    <section className="bepart">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mt-9">
            <h2>Be a part of the <span className="edu">StackIvy Community</span></h2>
            <p className="my-5">Stackivy community is Africa's leading finance forum comprising of the best financial minds on the continent. Our community is changing the narrative of finance on the continent and we need your input.</p>
            <button
              className="btn btn-primary btn-000 rounded-pill px-5 py-4"
              to=""
            >
              Join Now
            </button>
          </div>
          <div className="col-sm-6">
            <img src={people} alt="people-community" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BePart