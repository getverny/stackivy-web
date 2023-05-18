import moyo from "../assets/moyo.png";

function VisionStatement() {
  return (
    <section className="v-state bg-white">
      <div className="container">
        <div className="vision-card">
          <div className="row justify-content-center">
            <div className="col-sm-8 text-center">
              <h2 className="text-white mb-5">Vision Statement</h2>
              <p className="text-white">We envision a future where individuals and businesses can effortlessly access and manage their finances through a centralized platform, transcending traditional barriers and empowering them to thrive economically. We are committed to leveraging cutting-edge technologies, such as our no-card system and innovative payment solutions like the payment wristband, to provide faster, secure, and convenient payment options that enhance financial experiences and drive economic growth.</p>
            </div>
          </div>
          <div className="row justify-content-end mt-4">
            <div className="col-sm-2">
              <img src={moyo} alt="Founder" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionStatement