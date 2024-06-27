import React, { useEffect, useContext } from "react";
import { StepContext } from "../StepContext";

const StepThree = () => {
  const { setActiveStep, formDataStepTwo } = useContext(StepContext);

  useEffect(() => {
    document.querySelectorAll(".plan-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const planId = this.getAttribute("data-plan");
        document.querySelectorAll(".plan-content").forEach((content) => {
          content.classList.remove("active");
        });
        document.getElementById(planId).classList.add("active");
      });
    });
  }, []);
  return (
    <>
      <div className="content3-section ">
        <div className="container ">
          <div className="row h-100">
            <div className="col-lg-8 text-light d-flex align-items-start justify-content-start flex-column">
              <h1>
                Choose the best warranty cover for your Alpina - 
                <span> including your 11% saving</span>
              </h1>
              <p>
                IMPORTANT: This offer cannot be used in conjunction with any
                other offer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h3 class="fw-bold">Choose a plan to suit you below:</h3> */}
      <div className="collapse-section">
        <div className="container mt-5">
          <h2>Choose a plan to suit you below:</h2>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="plan-btn card text-center" data-plan="planA">
                <div className="card-body">
                  <h5 className="card-title">Plan A</h5>
                  <p className="card-text">
                    <span className="text-danger">£36.44</span>
                    <small className="text-muted">
                      <del>£40.94</del>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan-btn card text-center" data-plan="planALite">
                <div className="card-body">
                  <h2 className="card-title">Plan A Lite</h2>
                  <p className="card-text">
                    <span className="text-danger">£21.56</span>
                    <small className="text-muted">
                      <del>£24.22</del>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan-btn card text-center" data-plan="planC">
                <div className="card-body">
                  <h5 className="card-title">Plan C</h5>
                  <p className="card-text">
                    <span className="text-danger">£32.22</span>
                    <small className="text-muted">
                      <del>£36.20</del>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="plan-btn card text-center" data-plan="planCLite">
                <div className="card-body">
                  <h5 className="card-title">Plan C Lite</h5>
                  <p className="card-text">
                    <span className="text-danger">£19.91</span>
                    <small className="text-muted">
                      <del>£22.37</del>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="plan-content active p-5" id="planA">
            <div className="description">
              <h2>
                {" "}
                <span>
                  Our Most Popular Plan! <br />
                </span>{" "}
                Specifically designed to cover cars three years and older, or
                coming out of manufacturer’s guarantee
              </h2>
              <p>
                Our top level of car warranty cover for your 2022 HONDA JAZZ EX
                I-MMD CVT.
              </p>
              <p>
                World’s first EV warranty including drive battery protection
              </p>
              <p>
                Make sure you protect the critical - and expensive - drivetrain
                components of your electric car, including electric motors and
                drive battery. Select "Summary of Cover" for a complete list of
                covered areas.
              </p>
              <p className="fw-bold">
                Covers failures, no matter where they happen
              </p>
              <p>At home, on the road, or during an MOT or service.</p>
              <p className="fw-bold">Buy today for immediate protection</p>
              <p>
                If you need repairs report them 24/7 via your MotorEasy account
                and we’ll do the rest.
              </p>
              <p className="fw-bold">Flexible cover</p>
              <p>
                If you need repairs report them 24/7 via your{" "}
                <a href="#">MotorEasy account</a> and we’ll do the rest.
              </p>
              <div className="three-buttons ">
                <button className="btn btn-proceed mt-3">
                  Proceed to customise
                </button>
                <div className="buttons-section d-flex justify-content-end align-items-center">
                  <button className="btn btn-summery mt-3">
                    Summary of cover
                  </button>
                  <button className="btn btn-summery mt-3">
                    Car Warranty Document
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="plan-content p-5" id="planALite">
            <div className="description">
              <h2>
                {" "}
                <span>
                  {" "}
                  <br />
                </span>{" "}
                Car Warranty cover for breakdowns on the road, that need
                recovery. An economical alternative to Plan A car warranty
                coverage
              </h2>
              <p>
                Comprehensive car warranty cover for your{" "}
                <b>2022 HONDA JAZZ EX I-MMD CVT at a lower price.</b>
              </p>
              <p className="fw-bold">
                World’s first EV warranty including drive battery protection
              </p>
              <p>
                Make sure you protect the critical - and expensive - drivetrain
                components of your electric car, including electric motors and
                drive battery. Select "Summary of Cover" for a complete list of
                covered areas.
              </p>
              <p className="fw-bold">Covers failures at the roadside</p>
              <p>
                Plan A Lite gives the same protection for repair bills as Plan A
                if you are away from home and your car is towed to a garage.
              </p>
              <p className="fw-bold">Report repairs 24/7</p>
              <p>
                Called out a recovery truck? Report it from your{" "}
                <a href="#">account</a>, knowing MotorEasy is here to help with
                subsequent repairs.
              </p>
              <p className="fw-bold">Flexible cover</p>
              <p>
                If you change your mind don’t worry, just contact us to alter
                your cover.
              </p>
              <div className="three-buttons ">
                <button className="btn btn-proceed mt-3">
                  Proceed to customise
                </button>
                <div className="buttons-section d-flex justify-content-end align-items-center">
                  <button className="btn btn-summery mt-3">
                    Summary of cover
                  </button>
                  <button className="btn btn-summery mt-3">
                    Car Warranty Document
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="plan-content p-5" id="planC">
            <div className="description">
              <h2>
                {" "}
                <span>
                  <br />
                </span>{" "}
                Our economical alternative Car Warranty cover for breakdowns on
                the road that need recovery.
              </h2>
              <p className="fw-bold">
                Comprehensive car warranty cover for your 2022 HONDA JAZZ EX
                I-MMD CVT at a lower price.
              </p>
              <p>
                {" "}
                <b>Valid on all mechanical and electrical components</b>, plan A
                Lite gives the same protection for repair bills as Plan A if you
                are away from home and your car is towed to a garage.
              </p>
              <p>
                Called out a recovery truck? Report it from your{" "}
                <a href="#">account</a>, knowing MotorEasy is here to help with
                subsequent repairs.
              </p>
              <div className="three-buttons ">
                <button className="btn btn-proceed mt-3">
                  Proceed to customise
                </button>
                <div className="buttons-section d-flex justify-content-end align-items-center">
                  <button className="btn btn-summery mt-3">
                    Summary of cover
                  </button>
                  <button className="btn btn-summery mt-3">
                    Car Warranty Document
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="plan-content p-5" id="planCLite">
            <div className="description">
              <h2>
                {" "}
                <span>
                  Not sure – Buy today and we will upgrade the plan in future if
                  you wish!
                  <br />
                </span>
                Our economical alternative to Plan C warranty cover for
                breakdowns on the road that need recovery.
              </h2>
              <p className="fw-bold">
                Comprehensive car warranty cover for your 2022 HONDA JAZZ EX
                I-MMD CVT at a lower price.
              </p>
              <p>
                Valid on mechanical and electrical faults, if you are away from
                home and your car is towed to a garage, Plan C Lite offers you
                the same protection for repair bills as Plan C. Simply report
                repairs via your <a href="#">MotorEasy account</a>.
              </p>
              <div className="three-buttons ">
                <button className="btn btn-proceed mt-3">
                  Proceed to customise
                </button>
                <div className="buttons-section d-flex justify-content-end align-items-center">
                  <button className="btn btn-summery mt-3">
                    Summary of cover
                  </button>
                  <button className="btn btn-summery mt-3">
                    Car Warranty Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h2 className="m-3">Customise your warranty:</h2>
      </div>
      <div
        className="section-bottom content-section-main overflow-x-hidden"
        id="content1-bottom-section"
      >
        <div className="container">
          {/* Repairer Preference */}
          <div className="row mb-4">
            <div
              className="col-lg-2 text-primary
                                         text-center icons align-middle"
            >
              <i className="fa-solid fa-car" />
            </div>
            <div className="col-lg-6 p-4">
              <h4>
                <b>Repairer Preference</b>
              </h4>
              <p>
                If you choose a MotorEasy workshop, we will pay them directly,
                saving you time and hassle. It will also lower the price of your
                warranty, as you will benefit from our trade discounts, up to
                40% cheaper than main dealer prices.
              </p>
            </div>
            <div className="col-lg-4 p-4 d-flex justify-content-center align-items-center">
              <form className="fs-4 fw-bold">
                <input
                  type="radio"
                  id="MotorEasy"
                  name="fav_language"
                  defaultValue={1}
                  onClick="showContent('content1-bottom-section')"
                />
                <label htmlFor="MotorEasy">MotorEasy Network</label>
                <br />
                <input
                  type="radio"
                  id="Find"
                  name="fav_language"
                  defaultValue={2}
                  onClick="showContent('content2-bottom-section')"
                />
                <label htmlFor="Find">Find My Own Garage</label>
                <br />
              </form>
            </div>
          </div>
          {/* My Repair Contribution */}
          <div className="repair-contribution p-2 mt-3">
            <div className="row mb-4 ">
              <div
                className="col-lg-2 text-primary
                                         text-center icons align-middle"
              >
                <i className="fa-solid fa-chart-pie" />
              </div>
              <div className="col-lg-7 p-4">
                <h4>
                  <b>My Repair Contribution</b>
                </h4>
                <p>
                  Choose how much you are willing to contribute to repair costs
                  to further adjust the price of your warranty.
                </p>
              </div>
              <div className="col-lg-3 p-4 mt-3">
                <form className="fs-4 fw-bold d-flex align-items-center justify-content-between flex-row">
                  {/* <p>Please select your favorite Web language:</p> */}
                  <div className=" d-flex flex-column">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                    />
                    <label htmlFor="html"> £0</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> £25</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> £50</label>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Warranty Duration
           */}
          <div className=" Warranty Duration mt-3 p-2">
            <div className="row mb-4 ">
              <div
                className="col-lg-2 text-primary
                                         text-center icons align-middle"
              >
                <i className="fa-regular fa-clock" />
              </div>
              <div className="col-lg-6 p-4">
                <h4>
                  <b>Warranty Duration</b>
                </h4>
                <p>
                  Choosing a longer-term warranty will lower the monthly premium
                  we apply.
                </p>
              </div>
              <div className="col-lg-4 p-4">
                <form className="fs-5 fw-bold d-flex align-content-center justify-content-between">
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                    />
                    <label htmlFor="html"> Monthly Base</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> 12 Months</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> 24 Months</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> 36 Months</label>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Car Warranty Start Date
           */}
          <div className="repair-contribution mt-3">
            <div className="row mb-4 ">
              <div
                className="col-lg-2 text-primary
                                         text-center icons align-middle"
              >
                <i className="fa-regular fa-calendar-days" />
              </div>
              <div className="col-lg-7 p-4">
                <h4>
                  <b>Car Warranty Start Date</b>
                </h4>
                <p>
                  Choose the date when you would like your warranty plan to
                  start.
                </p>
              </div>
              <div className="col-lg-3 p-4">
                <input className="p-2" type="date" defaultValue="2017-06-01" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-bottom content-section-main overflow-x-hidden"
        id="content2-bottom-section"
      >
        <div className="container">
          {/* Repairer Preference */}
          <div className="row mb-4">
            <div
              className="col-lg-2 text-primary
                                          text-center icons align-middle"
            >
              <i className="fa-solid fa-car" />
            </div>
            <div className="col-lg-6 p-4">
              <h4>
                <b>Repairer Preference</b>
              </h4>
              <p>
                If you choose a MotorEasy workshop, we will pay them directly,
                saving you time and hassle. It will also lower the price of your
                warranty, as you will benefit from our trade discounts, up to
                40% cheaper than main dealer prices.
              </p>
            </div>
            <div className="col-lg-4 p-4 d-flex justify-content-center align-items-center">
              <form className="fs-4 fw-bold">
                <input
                  type="radio"
                  id="MotorEasy"
                  name="fav_language"
                  defaultValue={1}
                  onClick="showContent('content1-bottom-section')"
                />
                <label htmlFor="MotorEasy">MotorEasy Network</label>
                <br />
                <input
                  type="radio"
                  id="Find"
                  name="fav_language"
                  defaultValue={2}
                  onClick="showContent('content2-bottom-section')"
                />
                <label htmlFor="Find">Find My Own Garage</label>
                <br />
              </form>
            </div>
          </div>
          {/* Garage Labour Rate */}
          <div className="repair-contribution p-2 mt-3">
            <div className="row mb-4 ">
              <div
                className="col-lg-2 text-primary
                                          text-center icons align-middle"
              >
                <i className="fa-solid fa-wrench" />
              </div>
              <div className="col-lg-7 p-4">
                <h4>Garage Labour Rate</h4>
                <p>
                  You have chosen to find your own garage to carry out repairs,
                  please choose the maximum garage hourly labour rate.
                </p>
              </div>
              <div className="col-lg-3 p-4 mt-3">
                <form className="fs-4 fw-bold d-flex align-items-center justify-content-between flex-row">
                  {/* <p>Please select your favorite Web language:</p> */}
                  <div className=" d-flex flex-column">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                    />
                    <label htmlFor="html"> £0</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> £25</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> £50</label>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* My Repair Contribution */}
          <div className="repair-contribution p-2 mt-3">
            <div className="row mb-4 ">
              <div
                className="col-lg-2 text-primary
                                          text-center icons align-middle"
              >
                <i className="fa-solid fa-chart-pie" />
              </div>
              <div className="col-lg-7">
                <h4>My Repair Contribution</h4>
                <p>
                  Choose how much you are willing to contribute to repair costs
                  to further adjust the price of your warranty.
                </p>
              </div>
              <div className="col-lg-3 p-4 mt-3">
                <form className="fs-4 fw-bold d-flex align-items-center justify-content-between flex-row">
                  {/* <p>Please select your favorite Web language:</p> */}
                  <div className=" d-flex flex-column">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                    />
                    <label htmlFor="html"> £0</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> £25</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> £50</label>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Warranty Duration
           */}
          <div className=" Warranty Duration mt-3 p-2">
            <div className="row mb-4 ">
              <div
                className="col-lg-2 text-primary
                                          text-center icons align-middle"
              >
                <i className="fa-regular fa-clock" />
              </div>
              <div className="col-lg-6 p-4">
                <h4>Warranty Duration</h4>
                <p>
                  Choosing a longer-term warranty will lower the monthly premium
                  we apply.
                </p>
              </div>
              <div className="col-lg-4 p-4">
                <form className="fs-5 fw-bold d-flex align-content-center justify-content-between">
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                    />
                    <label htmlFor="html"> Monthly Base</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> 12 Months</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> 24 Months</label>
                    <br />
                  </div>
                  <div className="d-flex flex-column">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      defaultValue="CSS"
                    />
                    <label htmlFor="css"> 36 Months</label>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Car Warranty Start Date
           */}
          <div className="repair-contribution mt-3">
            <div className="row mb-4 ">
              <div
                className="col-lg-2 text-primary
                                          text-center icons align-middle"
              >
                <i className="fa-regular fa-calendar-days" />
              </div>
              <div className="col-lg-7 p-4">
                <h4>Car Warranty Start Date</h4>
                <p>
                  Choose the date when you would like your warranty plan to
                  start.
                </p>
              </div>
              <div className="col-lg-3">
                <input
                  className="p-2 mt-4"
                  type="date"
                  defaultValue="2017-06-01"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plan-c-light bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <h1 className="text-light me-1">
                Plan C Lite{" "}
                <s className="text-warning">
                  £25.
                  <sup>70</sup>
                </s>{" "}
                <button className="bg-danger px-3 py-2 fs-2 rounded-5 text-light">
                  £22.87
                </button>
                <p className="fs-5">per month</p>
              </h1>
              <h1 className="text-warning"></h1>
              <p className="text-light">
                Payment options available at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="two_step_button d-flex justify-content-between mt-5">
        <button className="text-start">Previous step</button>
        <button className="text-end">Next step -my optional additions</button>
      </div>
    </>
  );
};
export default StepThree;
