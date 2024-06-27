import React, { createContext, useState } from 'react';

const StepContext = createContext();

const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formDataStepTwo, setFormDataStepTwo] = useState({});

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep, formDataStepTwo, setFormDataStepTwo }}>
      {children}
    </StepContext.Provider>
  );
};

export { StepProvider, StepContext };
