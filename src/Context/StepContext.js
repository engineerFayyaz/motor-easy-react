// StepContext.js
import React, { createContext, useState } from 'react';

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    stepOneData: {},
    stepTwoData: {},
    stepThreeData: {},
  });

  const updateFormData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep, formData, updateFormData }}>
      {children}
    </StepContext.Provider>
  );
};
