import fast from "../assets/fast.svg";

function Fast() {
  return (
    <section className="fast">
      <div className="container">
        <div className="col-sm-6 mb-3">
          <img src={fast} alt="fast" className="img-fluid" />
          <p className="w-75 mt-4">At Hargon, we have leveraged the best technology to simplify your loan process, making it faster and easier for you to get the credit you need. All we need you to do is click the button below and follow the steps outlined. Credit has never been more convenient.</p>
        </div>
        <div className="col-sm-6 mb-3"></div>
      </div>
    </section>
  );
}

export default Fast;
