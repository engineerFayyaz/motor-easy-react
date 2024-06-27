import React, { useState, useContext, useEffect } from "react";
// Import the function to add data to Firestore
import { addVehicleDetails } from "../../../firebase";
import { ToastContainer, toast } from "react-toastify";
import img from "../../../assets/images/side_image.png";
import img2 from "../../../assets/images/uk.png";
import { StepContext } from "../../../Context/StepContext";
const StepOne = ({ modelValue }) => {
  const [loading, setLoadinng] = useState(false);
  
  const { setActiveStep, setFormDataStepTwo } = useContext(StepContext);
  console.log("selected model in first step is", modelValue);


  const [formData, setFormData] = useState({
    carRegistration: "",
    make: "",
    model: modelValue || "",
    range: "",
    motExpiryDate: "",
    firstRegistrationDate: "",
    estimatedMileage: "",
  });

  useEffect(() => {
    console.log("selected model in first step is", modelValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      model: modelValue,
    }));
  }, [modelValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadinng(true);
      await addVehicleDetails(formData);
      toast.success("Form submitted successfully!");
      setFormDataStepTwo(formData); // Pass formData to StepTwo
      setActiveStep(2);
      // window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form.");
    } finally {
      setLoadinng(false);
    }
  };

  const handleFindCar = () => {
    const form = document.getElementById('show_form');
    if(formData.carRegistration === ""){
      toast.error("Please eneter car registration number");
    }
    else {
      form.style.display = 'block';
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container_10_field">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <div className="offer">TV OFFER</div>
          <div>
            SAVE <span className="discount">10%</span>{" "}
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
              <label htmlFor="carRegistration">
                <img src={img2} alt="" />
              </label>
              <input
                type="text"
                id="carRegistration"
                name="carRegistration"
                value={formData.carRegistration}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-2 Find_car  d-flex justify-content-end align-items-center">
              <button type="button" onClick={handleFindCar}>Find Car &gt;</button>
            </div>
            <div className="col-lg-3 ms-3 d-flex justify-content-start flex-column ">
              <h6>Already Have an Account?</h6>
              <a href="javascript:void(0)">
                <h5 style={{ color: "red" }}>Sign in Here</h5>
              </a>
            </div>
            <a href="javascript:void(0)">
              <h5 className="mt-5 text-dark">
                Don't Know Your Registration? Click here
              </h5>
            </a>
          </div>
          <div className="show" id="show_form" style={{display:"none"}} >
          <div className="row">
            <div className="col-lg-12 many_select">
              <div className="set_width">
                <div className=" motor_info mt-5 d-flex justify-content-between align-items-center">
                  <h4>My Motor Info</h4>
                  <h5>
                    <span style={{ color: "#f00" }}>*</span>Mandatory field
                  </h5>
                </div>
                <div className="mb-3">
                  <label htmlFor="make" className="form-label">
                    Make <span>*</span>
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="make"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-Choose-</option>
                    <option value="Car Warranty">Car Warranty</option>
                    <option value="MOT">MOT</option>
                    <option value="Car Insurance">Car Insurance</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="model" className="form-label">
                    Model
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="w-100"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="range" className="form-label">
                    Range
                    <span>*</span>
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="range"
                    name="range"
                    value={formData.range}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-Choose-</option>
                    <option value="Car Warranty">Car Warranty</option>
                    <option value="MOT">MOT</option>
                    <option value="Car Insurance">Car Insurance</option>
                  </select>
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="motExpiryDate">
                    MOT Expiry Date <span>*</span>
                  </label>
                  <input
                    type="date"
                    id="motExpiryDate"
                    name="motExpiryDate"
                    value={formData.motExpiryDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="firstRegistrationDate">
                    Date Car Was First Registered
                    <span>*</span>
                  </label>
                  <input
                    type="date"
                    id="firstRegistrationDate"
                    name="firstRegistrationDate"
                    value={formData.firstRegistrationDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="estimatedMileage">
                    Current Estimated Mileage
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="estimatedMileage"
                    name="estimatedMileage"
                    value={formData.estimatedMileage}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-end mt-5 next_step_info">
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Next Step - My Info"}
            </button>
          </div>
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
                  <i className="fa-solid fa-1  feature-icon" />
                  <div>The UK’s best level of cover</div>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-dollar-sign  feature-icon" />
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
                  <div>Mechanical & electrical cover</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🚗</div>
                  <div>Protect your car’s future value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StepOne;
