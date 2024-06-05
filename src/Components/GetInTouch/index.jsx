import React from "react";
import "../../Pages/AboutUs/about_us.css";
import H3Work from "../../assets/images/H3-work1.png";
import H3Work2 from "../../assets/images/H3-work2.png";
import H3Work3 from "../../assets/images/H3-work3.png";

function GetInTouch() {
  return (
    <div className="container">
      <div className="row">
        {/* Carousel for large screens */}
        <div
          id="carouselExampleIntervalaboutUs"
          className="carousel slide d-none d-lg-block"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ background: "none", border: "none" }}
            >
              <div className="row GET_IN_TOUCH_Carousel">
                <div className="col-lg-4 text-center">
                  <div className="card d-flex justify-content-center align-items-center flex-wrap">
                    <img src={H3Work} width="100%" alt="Real Insurance" />
                    <div className="card-body">
                      <i className="fa-solid fa-car"></i>
                      <h3 className="card-title">Real Insurance</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nemo facere consequatur dolor provident ipsa!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="card d-flex justify-content-center align-items-center flex-wrap">
                    <img src={H3Work2} width="100%" alt="Choose Insurance" />
                    <div className="card-body">
                      <i className="fa-solid fa-car"></i>
                      <h3 className="card-title">Choose Insurance</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nemo facere consequatur dolor provident ipsa!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="card d-flex justify-content-center align-items-center flex-wrap">
                    <img src={H3Work3} width="100%" alt="Get Insurance" />
                    <div className="card-body">
                      <i className="fa-solid fa-car"></i>
                      <h3 className="card-title">Get Insurance</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nemo facere consequatur dolor provident ipsa!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIntervalaboutUs"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIntervalaboutUs"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Carousel for small screens */}
        <div
          id="carouselExampleIntervalaboutUssmall"
          className="carousel slide d-block d-lg-none"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ background: "none", border: "none" }}
            >
              <div className="row GET_IN_TOUCH_Carousel">
                <div className="col-lg-4 text-center">
                  <div className="card d-flex justify-content-center align-items-center flex-wrap">
                    <img src={H3Work} width="100%" alt="Real Insurance" />
                    <div className="card-body">
                      <i className="fa-solid fa-car"></i>
                      <h3 className="card-title">Real Insurance</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nemo facere consequatur dolor provident ipsa!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ background: "none", border: "none" }}
            >
              <div className="row GET_IN_TOUCH_Carousel">
                <div className="col-lg-4 text-center">
                  <div className="card d-flex justify-content-center align-items-center flex-wrap">
                    <img src={H3Work2} width="100%" alt="Choose Insurance" />
                    <div className="card-body">
                      <i className="fa-solid fa-car"></i>
                      <h3 className="card-title">Choose Insurance</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nemo facere consequatur dolor provident ipsa!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ background: "none", border: "none" }}
            >
              <div className="row GET_IN_TOUCH_Carousel">
                <div className="col-lg-4 text-center">
                  <div className="card d-flex justify-content-center align-items-center flex-wrap">
                    <img src={H3Work3} width="100%" alt="Get Insurance" />
                    <div className="card-body">
                      <i className="fa-solid fa-car"></i>
                      <h3 className="card-title">Get Insurance</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem nemo facere consequatur dolor provident ipsa!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIntervalaboutUssmall"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIntervalaboutUssmall"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
