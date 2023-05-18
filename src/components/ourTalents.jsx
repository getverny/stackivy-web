import careers from "../assets/human.png";


function OurTalents() {
  return (
    <section className="ourtalents">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <h2>What we hope from our talents</h2>
            <p className="mt-4 ">For us, it is more than just building the next great thing. It is the community for us. Our priority is ensuring everyone is learning, and everyone is growing. </p>
            <p className="my-4 ">When we search for or take on new hires, we consider several aspects to ensure we bring out the best in our team and new employees. However, there are three we generally look out for before all the other nitty gritty. </p>
            <img src={careers} alt="career" className="img-fluid w-100 animate__animated animate__slideInLeft animate__fast w-100" />
          </div>
          <div className="col-sm-5">
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTalents;
