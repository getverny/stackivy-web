import careers from "../assets/human.png";
import motivate from "../assets/bicep.png";
import team from "../assets/team.png";
import teach from "../assets/teach.png";


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
            <div className="w-87">
              <img src={motivate} alt="motivate" className="img-fluid mb-3" width={90} />
              <h3>How Motivated Are You?</h3>
              <p>Motivation is the bedrock of any achievement, and we want to ensure you are properly motivated to achieve excellence at Stackivy</p>
            </div>
            <div className="w-87 mt-5">
              <img src={teach} alt="motivate" className="img-fluid mb-3" width={90} />
              <h3>Are You Teachable?</h3>
              <p>Achieving our mission means we are learning every day. We want to ensure you are teachable and eager to broaden your horizon.</p>
            </div>
            <div className="w-87 mt-5">
              <img src={team} alt="motivate" className="img-fluid mb-3" width={90} />
              <h3>Can You Adapt A New Team?</h3>
              <p>Our chemistry is our bread and butter. We want to ensure you are compatible with our team, and the sky will be the limit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTalents;
