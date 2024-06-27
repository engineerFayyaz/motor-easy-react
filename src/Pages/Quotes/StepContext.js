// StepContext.jsx
import React, { createContext, useState } from 'react';

const StepContext = createContext();

const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedModel, setSelectedModel] = useState('');

  if(selectedModel){
    console.log('model submitted in context is: ', selectedModel);
  }

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep, selectedModel, setSelectedModel }}>
      {children}
    </StepContext.Provider>
  );
};

export { StepProvider, StepContext };
