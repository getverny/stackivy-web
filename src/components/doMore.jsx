import domore from "../assets/cus.svg";


function DoMore() {
  return (
    <section className="domore">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={domore} alt="domore" className="img-fluid mb-4" />
            <p className="text-white"> Every customer wants to feel special and heard. With our seamless payment process, we help you make your customers understand how much you value them. Making your customers happy guarantees you will be seeing more of them, which makes us happy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoMore;
