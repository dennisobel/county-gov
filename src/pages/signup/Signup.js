import { useEffect, useState } from "react";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import {
  UseContextProvider,
  useStepperContext,
} from "../../contexts/StepperContext";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PersonalInformation from "./PersonalInformation";
import Identification from "./Identification";
import AccountInformation from "./AccountInformation";
import LocationRole from "./LocationRole";
import ReviewAccept from "./ReviewAccept";
import Otp from "./pin";
import Final from "./Final";

import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

import Profile from "./../profile/Profile"

function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const { userData, setUserData } = useStepperContext();
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  

  const steps = ["", "", "", "", "", "", ""];
  // const steps = Array.isArray({5})

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <Identification />;
      case 3:
        return <AccountInformation />;
      case 4:
        return <LocationRole />;
      case 5:
        return <ReviewAccept />;
      case 6:
        return <Otp />;
      case 7:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    if (
      newStep === 5 &&
      direction === "next" &&
      (state.global.multiStepSignup.userData.reviewAccept.terms === false ||
        state.global.multiStepSignup.userData.reviewAccept.terms === "")
    ) {
      toast.warn("Please accept the terms and conditions.");
    }

    if( newStep === 6 && direction === "next"){
      navigate("/profile")
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-1 py-1 mx-1 lg:py-0">
        <Logo />
      </div>

      <div className="mx-auto rounded-2xl pb-2 shadow-xl md:w-1/2 bg-white">
        <div className="horizontal container mt-5 ">
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-8 text-3xl font-bold">
              Create Account &nbsp;
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-bold text-primary-600 hover:underline dark:text-primary-500"
                >
                  <Link to="/login">Login</Link>
                </a>
              </span>
            </p>
          </div>
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-1 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </>
  );
}

export default Signup;
