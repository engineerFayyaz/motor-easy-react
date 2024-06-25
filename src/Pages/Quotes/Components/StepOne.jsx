import React from "react";
import img from "../../../assets/images/side_image.png"
import img2 from "../../../assets/images/uk.png"
const StepOne = () => {

    return (
        <>
        <>
  <div className="container_10_field">
    <div className="image">
      <img src={img} alt="" />
    </div>
    <div className="text">
      <div className="offer">TV OFFER</div>
      <div>
        SAVE <span className="discount">10%</span>
        <span className="new-discount">11%</span>
      </div>
      <div className="important">
        IMPORTANT: This offer cannot be used in conjunction with any other
        offer.
      </div>
    </div>
  </div>
  <br />
  <div className="row">
    <div className="col-lg-7  p-4" style={{ backgroundColor: "#f1f1f1" }}>
      <div className=" motor_info d-flex justify-content-between align-items-center">
        <h4>My Motor Info</h4>
        <h5>
          <span style={{ color: "#f00" }}>*</span>Mandatory field
        </h5>
      </div>
      <div className="row mt-5 " style={{ marginTop: "30px !important" }}>
        <h4 className="">Car Registration</h4>
        <div className="col-lg-6 Registration d-flex justify-content-end align-items-center">
          <label htmlFor="#">
            <img src={img2} alt="" />
          </label>
          <input type="text" />
        </div>
        <div className="col-lg-2 Find_car  d-flex justify-content-end align-items-center">
          <button>Find Car &gt;</button>
        </div>
        <div className="col-lg-3 ms-3 d-flex justify-content-start flex-column ">
          <h6>Already Have an Account?</h6>
          <a href="javascript:void(0)">
            <h5 style={{ color: "red" }}>Sign in Hare</h5>
          </a>
        </div>
        <a href="javascript:void(0)">
          <h5 className="mt-5 text-dark">
            Don't Know Your Registration ? Click here
          </h5>
        </a>
      </div>
      <div className="motor_info mt-5 d-flex justify-content-between align-items-center">
        <h4>My Motor Info</h4>
        <h5>
          <span style={{ color: "#f00" }}>*</span>Mandatory field
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-12 many_select">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Make <span>*</span>
            </label>
            <select className="form-select form-select-lg" name="" id="">
              <option selected="">-Choose-</option>
              <option value="">Car Warranty</option>
              <option value="">MOT</option>
              <option value="">Car Insurance</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Modle <span>*</span>
            </label>
            <select className="form-select form-select-lg" name="" id="">
              <option selected="">-Choose-</option>
              <option value="">Car Warranty</option>
              <option value="">MOT</option>
              <option value="">Car Insurance</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Range <span>*</span>
            </label>
            <select className="form-select form-select-lg" name="" id="">
              <option selected="">-Choose-</option>
              <option value="">Car Warranty</option>
              <option value="">MOT</option>
              <option value="">Car Insurance</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="#">
              MOT Expiry Date <span>*</span>
            </label>
            <input type="date" />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="#">
              Date Car Was First Registered
              <span>*</span>
            </label>
            <input type="date" />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="#">
              Current Estimated Mileage <span>*</span>
            </label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="text-end mt-5 next_step_info">
        <button>Next Step-my info</button>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-5 motor_section_end">
          <div className="image_on_text">
            <h5>
              “My vision was to create the best Car Warranty for value and
              service”
            </h5>
            <h6>I hope you enjoy!</h6>
            <p>Duncan McClure Fisher, founder, MotorEasy</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-5 ">
      <div className="row p-4" style={{ backgroundColor: "#f1f1f1" }}>
        <h4>
          <b>Why thousands of UK motorists trust MotorEasy Car Warranty</b>
        </h4>
        <div className="row " style={{ marginTop: "30px !important" }}>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="feature-icon">#1</div>
              <div>The UK’s best level of cover</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">£</div>
              <div>Parts, labour and diagnostic costs covered</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⏱️</div>
              <div>60 days European cover</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="feature-icon">24/7</div>
              <div>Report repairs 24/7</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <div>Repairs handled on your behalf</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌲</div>
              <div>Costs paid directly at 10,000 MotorEasy network garages</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5>
            <b>Accepted Payment Methods</b>
          </h5>
          <div className="payment-methods">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        </>
    )
}
export default StepOne;