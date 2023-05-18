
import date from "../assets/date.svg";
import map from "../assets/map.svg";
import manager from "../assets/odm.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";




function Upcoming() {
  return (
    <section className="upcoming">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <span className="closed" style={{background: "#E1EDF4", color: "#000"}}>UPCOMING EVENTS</span>
            <h2 className="mt-3">Grab a spot in our upcoming webinars</h2>
            <p className="mt-4">Be a part of Stackivy webinars where we discuss and learn from experts on topics that are shaping the face of finance across Africa and beyond </p>
          </div>
        </div>
        <div className="row mt-5">
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
              <div className="webinar-card">
                <h4>WEBINARS</h4>
                <h5 className="mt-3">Leveraging Technology to Change the Future of Finance in Africa</h5>
                <div className="row my-4">
                  <div className="col-sm-6 mb-2">
                    <h3><img src={date} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> 10th May, 2023</h3>
                  </div>
                  <div className="col-sm-6">
                    <h3><img src={map} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> Google Meet</h3>
                  </div>
                </div>
                <img src={manager} alt="manager" className="img-fluid mb-5" />
                <button type="button" className="btn btn-secondary btn-closed py-3 w-100">Closed</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="webinar-card">
                <h4>WEBINARS</h4>
                <h5 className="mt-3">Leveraging Technology to Change the Future of Finance in Africa</h5>
                <div className="row my-4">
                  <div className="col-sm-6 mb-2">
                    <h3><img src={date} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> 10th May, 2023</h3>
                  </div>
                  <div className="col-sm-6">
                    <h3><img src={map} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> Google Meet</h3>
                  </div>
                </div>
                <img src={manager} alt="manager" className="img-fluid mb-5" />
                <button type="button" className="btn btn-secondary btn-closed py-3 w-100">Closed</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="webinar-card">
                <h4>WEBINARS</h4>
                <h5 className="mt-3">Leveraging Technology to Change the Future of Finance in Africa</h5>
                <div className="row my-4">
                  <div className="col-sm-6 mb-2">
                    <h3><img src={date} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> 10th May, 2023</h3>
                  </div>
                  <div className="col-sm-6">
                    <h3><img src={map} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> Google Meet</h3>
                  </div>
                </div>
                <img src={manager} alt="manager" className="img-fluid mb-5" />
                <button type="button" className="btn btn-secondary btn-closed py-3 w-100">Closed</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="webinar-card">
                <h4>WEBINARS</h4>
                <h5 className="mt-3">Leveraging Technology to Change the Future of Finance in Africa</h5>
                <div className="row my-4">
                  <div className="col-sm-6 mb-2">
                    <h3><img src={date} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> 10th May, 2023</h3>
                  </div>
                  <div className="col-sm-6">
                    <h3><img src={map} alt="date" className="img-fluid me-1" style={{marginTop: "-4px"}} /> Google Meet</h3>
                  </div>
                </div>
                <img src={manager} alt="manager" className="img-fluid mb-5" />
                <button type="button" className="btn btn-secondary btn-closed py-3 w-100">Closed</button>
              </div>
            </SwiperSlide>
            
            
            
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Upcoming