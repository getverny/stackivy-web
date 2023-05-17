import plus from "../assets/mosaic.svg";
import hargon from "../assets/comsoon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";

function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={plus} alt="community" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-9">
            <h6>Want to try out our products before making a decision? We have prepared well-rounded demos for you to experience and identify which of our products suits your specific need.</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Try out our demo
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid toppings px-0">
        <div className="row">
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={hargon} alt="coming-soon" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hargon} alt="coming-soon" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hargon} alt="coming-soon" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hargon} alt="coming-soon" className="img-fluid" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Experience;
