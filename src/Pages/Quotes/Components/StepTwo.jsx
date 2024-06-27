import React, {useContext} from "react";
import img1 from "../../../assets/images/secssion_2.png";
import img2 from "../../../assets/images/uk.png";
import { StepContext } from "../../../Context/StepContext";
import { push } from "firebase/database";

const StepTwo = () => {
  const { setActiveStep } = useContext(StepContext);
  return (
    <>
     <div className="row d-flex flex-row">
  <div className="col-lg-7">
    <div className="p-4" style={{ backgroundColor: "white" }}>
      <div className="d-flex flex-row justify-content-between">
        <h4 className="text-start">Your data is safe with us 🔏</h4>
        <h4 className="text-end">
          <b>Bitdefender</b>
        </h4>
      </div>
      <p style={{ fontSize: 14 }}>
        At MotorEasy, we understand that your data's security is of utmost
        importance, and we want to assure you that we take every possible
        measure to safeguard your information. Our dedicated team works
        tirelessly to maintain state-of-the-art security, ensuring that your
        data remains protected within our secure systems.
      </p>
    </div>
    <div className="row">
      <div
        className="col-lg-12 many_select"
        style={{ backgroundColor: "white", padding: 10 }}
      >
        <div className=" motor_info mt-5 d-flex justify-content-between align-items-center">
          <h4>My Info</h4>
          <h5>
            <span style={{ color: "#f00" }}>*</span>Mandatory field
          </h5>
        </div>
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="form-label">
              Title
              <span>*</span>
            </label>
            <i className="fa-regular fa-circle-question mt-5" />
          </div>
          <select className="form-select form-select-lg" name="" id="">
            <option selected="">-Choose-</option>
            <option value="">Car Warranty</option>
            <option value="">MOT</option>
            <option value="">Car Insurance</option>
          </select>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="#">
              First Name<span>*</span>
            </label>
            <i className="fa-regular fa-circle-question mt-5" />
          </div>
          <input type="text" />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="#">
              Surname<span>*</span>
            </label>
            <i className="fa-regular fa-circle-question mt-5" />
          </div>
          <input type="text" />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="#">
              Phone Number<span>*</span>
            </label>
            <i className="fa-regular fa-circle-question mt-5" />
          </div>
          <input type="text" />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="#">
              Email Address<span>*</span>
            </label>
            <i className="fa-regular fa-circle-question mt-5" />
          </div>
          <input type="email" />
        </div>
        <hr />
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="form-label">
              Tell About Us ownership
              <span>*</span>
            </label>
            <i className="fa-regular fa-circle-question mt-5" />
          </div>
          <select className="form-select form-select-lg" name="" id="">
            <option selected="">-Choose-</option>
            <option value="">Car Warranty</option>
            <option value="">MOT</option>
            <option value="">Car Insurance</option>
          </select>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="#">When did you buy the car?</label>
            {/* <i class="fa-regular fa-circle-question mt-5"></i> */}
          </div>
          <input type="date" />
        </div>
        <div className="two_step_button d-flex justify-content-between mt-5">
          <button className="text-start" onClick={() => window.history.back()}>Previous step</button>
          <button className="text-end" onClick={() => setActiveStep(3)}>Next step -my warrenty</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-5 ">
  <div className="secssion_image">
      <img src={img1} alt="" />
    </div>
    <div className="section_number_2 d-flex flex-column">
      <h3
        className="p-3"
        style={{ boxShadow: "0 1px 5px -2px rgba(0, 0, 0, .3)" }}
      >
        <b>The UK's Best Car Warranty</b>
      </h3>
      <div className="col-lg-8 mx-auto Registration d-flex mt-3 align-items-center">
        <label htmlFor="#">
          <img src={img2} alt="" />
        </label>
        <input type="text" />
      </div>
      <div
        className="row d-flex flex-column "
        style={{ marginTop: "20px !important" }}
      >
        <h4 className="text-center">
          <b>ABARTH/FIAT 124 SPIDER MULTIAIR</b>
        </h4>
        <div className=" col-md-8 mx-auto d-flex justify-content-between">
          <h5>
            <b>MOT Due</b>
          </h5>
          <h5>
            <b>13/11/2025</b>
          </h5>
        </div>
        <hr style={{ color: "black", border: "1px solid black" }} />
        <div className="col-md-8 mx-auto d-flex justify-content-between">
          <h5>
            <b>Service Due</b>
          </h5>
          <h5>
            <b>3/2/2025</b>
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};
export default StepTwo;
