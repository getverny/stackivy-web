import ok from "../assets/ok.svg";
import mask from "../assets/mask.svg";
import slide from "../assets/slide.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";





function ServeCustomers() {
  return (
    <section className="paylater">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-7">
            <img src={ok} alt="business" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4 mt-5">
            <h2 className="cred">Serve your customers better</h2>
            <p className="mt-5">A happy customer is a returning customer. Take advantage of Stackivy's credit solutions on Hargon and Curved to invest in giving your customers the best experience.</p>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: "-75px"}}>
        <div className="cap">
          <div className="row">
            <div className="col-sm-6 mt-5">
              <h2 className="text-white mb-4">Get the capital<br/>you need</h2>
              <p className="text-white">Are you beaming with a business idea or solution? Stackivy is eager to help young entrepreneurs launch the next great idea. Explore our credit solutions today.</p>
            </div>
            <div className="col-sm-6">
              <Swiper
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={mask} alt="slide" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide} alt="slide" className="img-fluid" />
                </SwiperSlide>
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default ServeCustomers;
