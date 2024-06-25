import React, { useState } from "react";
import MainHeader from "../../Components/MainHeader";
import QuoteBanner from "./Components/QuoteBanner";
import TopHeader from "../../Components/TopHeader";
import "./Quote.css";
import CardCarousel from "./Components/CardCarousel";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
export const Quotes = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      <TopHeader />
      <MainHeader />

      <main>
        <div className="container-fluid">
          <QuoteBanner />
          <div className="container">
            <CardCarousel />
            <div className="row">
              <div className="col-lg-12">
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
                      className={`step ${
                        activeStep === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handleStepClick(index + 1)}
                    >
                      <div className="step-circle">{index + 1}</div>
                      <div className="step-label">{label}</div>
                    </div>
                  ))}
                </div>
                <br />
                <div id="content1" className={`content-section ${activeStep === 1 ? 'active' : ''}`}>
                  <StepOne />
                </div>
                <div id="content2" className={`content-section ${activeStep === 2 ? 'active' : ''}`}>
                  <StepTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
