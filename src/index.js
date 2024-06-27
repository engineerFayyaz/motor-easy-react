import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./Context/AuthContext";
import { StepProvider } from "./Context/StepContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StepProvider>
        <App />
      </StepProvider>
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
