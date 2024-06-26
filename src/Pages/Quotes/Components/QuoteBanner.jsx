import React from "react";
// import "./Quote.css"
const QuotesBanner = () => {
  return (
    <>
      <div className="row main_body">
        <div className="col-lg-9 mx-auto motor_easy">
          <h1>We MotorEasy</h1>
          <h3>The Easy way to manage , protect and maintain your car</h3>
          <div className="select">
            <div className="mb-3 select d-flex flex-row">
              <select className="form-select form-select-lg" name="" id="">
                <option selected="">Pick a Product</option>
                <option value="">Car Warranty</option>
                <option value="">GPA Insurance</option>
                <option value="">Breakdown Cover</option>
                <option value="">Tyre Insurance</option>
                <option value="">Car Services</option>
                <option value="">MOT</option>
                <option value="">Car Repair</option>
                <option value="">Tyres</option>
                <option value="">Battery Cover</option>
              </select>
              <button>G0!</button>
            </div>
            <p>
              Got an account ? <a href="javascript:void(0)">Login</a> to
              retrieve an existing quote
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotesBanner;
