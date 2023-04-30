import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiFormSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    msisdn: "",
    email: "",
    id: "",
    kra: "",
    userType: "",
    password: "",
    confirmPassword: "",
    countyId: "",
    roleId: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Submit the form data to the server
    console.log(formData);
  };

  return (
    <div>
      {currentStep === 1 && (
        <Step1 onNext={handleNext} formData={formData} />
      )}
      {currentStep === 2 && (
        <Step2 onNext={handleNext} onPrevious={handlePrevious} formData={formData} />
      )}
      {currentStep === 3 && (
        <Step3 onNext={handleNext} onPrevious={handlePrevious} formData={formData} />
      )}
      {currentStep === 4 && (
        <Step4 onSubmit={handleSubmit} onPrevious={handlePrevious} formData={formData} />
      )}
    </div>
  );
};


export default MultiFormSignup