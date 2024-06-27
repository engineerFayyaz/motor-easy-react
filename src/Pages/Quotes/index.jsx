import React, { useState, useContext } from "react";
import { StepProvider, StepContext } from "./StepContext"; // import the StepProvider and StepContext
import MainHeader from "../../Components/MainHeader";
import TopHeader from "../../Components/TopHeader";
import "./Quote.css";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import StepFour from "./Components/StepFour";
import StepFive from "./Components/StepFive";
import { addModelDetails } from "../../firebase"; // import the function to add data to Firestore

const Quotes = () => {
  const [model, setModel] = useState("");
  const { activeStep, setActiveStep } = useContext(StepContext);

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const [loading, setLoading] = useState(null);

  const handleGoClick = async () => {
    try {
      if (model) {
        setLoading(true);
        const modelId = await addModelDetails(model);
        console.log("the value of model is : ", model);
        setTimeout(() => {
          setActiveStep(1);
        }, 1000)
      } else {
        alert("Please select a model");
      }
    } catch (error) {
      console.error("Error saving model:", error);
      alert("Failed to save model. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StepProvider>
      <TopHeader />
      <MainHeader />
      <main>
        <div className="container-fluid">
          <div
            className="row main_body"
            style={{ display: activeStep === 0 ? "block" : "none" }}
          >
            <div className="col-lg-10 mx-auto motor_easy">
              <h1>We MotorEasy</h1>
              <h3>The Easy way to manage, protect, and maintain your car</h3>
              <div className="select">
                <div className="mb-3 select d-flex flex-row">
                  <select
                    className="form-select form-select-lg"
                    name="model"
                    id="model"
                    value={model}
                    onChange={handleModelChange}
                  >
                    <option value="" disabled selected>
                      Pick a Product
                    </option>
                    <option value="Car Warranty">Car Warranty</option>
                    <option value="GPA Insurance">GPA Insurance</option>
                    <option value="Breakdown Cover">Breakdown Cover</option>
                    <option value="Tyre Insurance">Tyre Insurance</option>
                    <option value="Car Services">Car Services</option>
                    <option value="MOT">MOT</option>
                    <option value="Car Repair">Car Repair</option>
                    <option value="Tyres">Tyres</option>
                    <option value="Battery Cover">Battery Cover</option>
                  </select>
                  <button onClick={handleGoClick} disabled={loading}>{loading ? "processing..." : "Go!"}</button>
                </div>
                <p>
                  Got an account? <a href="javascript:void(0)">Login</a> to
                  retrieve an existing quote
                </p>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              margin: "10px auto",
              display: activeStep === 0 ? "block" : "none",
            }}
          >
            {/* <CardCarousel /> */}
          </div>
          <div
            className="container"
            style={{ display: activeStep !== 0 ? "block" : "none" }}
          >
            <div className="row">
              <div className="col-lg-12">
                <StepNavigator />
                <br />
                <ContentSections modal={model} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </StepProvider>
  );
};

const StepNavigator = () => {
  const { activeStep, setActiveStep } = useContext(StepContext);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="stepper">
      {[
        "My Motor",
        "My Info",
        "My Car Warranty",
        "My Optional Additions",
        "Finalise",
      ].map((label, index) => (
        <div
          key={index}
          className={`step ${activeStep === index + 1 ? "active" : ""}`}
          onClick={() => handleStepClick(index + 1)}
        >
          <div className="step-circle">{index + 1}</div>
          <div className="step-label">{label}</div>
        </div>
      ))}
    </div>
  );
};

const ContentSections = ({modal}) => {
  const { activeStep } = useContext(StepContext);

  return (
    <>
      <div
        id="content1"
        className={`content-section ${activeStep === 1 ? "active" : ""}`}
      >
        <StepOne modelValue={modal} />
      </div>
      <div
        id="content2"
        className={`content-section ${activeStep === 2 ? "active" : ""}`}
      >
        <StepTwo />
      </div>
      <div
        id="content3"
        className={`content-section ${activeStep === 3 ? "active" : ""}`}
      >
        <StepThree />
      </div>
      <div
        id="content4"
        className={`content-section ${activeStep === 4 ? "active" : ""}`}
      >
        <StepFour />
      </div>
      <div
        id="content5"
        className={`content-section ${activeStep === 5 ? "active" : ""}`}
      >
        <StepFive />
      </div>
    </>
  );
};

export default Quotes;
