import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Payment from "./components/steps/Payment";
import Final from "./components/steps/Final";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home"
import SingleBusinessPermitReg from "./components/steps/SingleBusinessPermitReg";
import Login from "./components/Login";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SingleBusinessPermitReg" element={<SingleBusinessPermitReg />} />
      </Routes>
    </>
  );
}

export default App;
