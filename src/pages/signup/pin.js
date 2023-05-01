import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useEffect } from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { useSelector, useDispatch } from 'react-redux';
import { updateOTPInformation } from "../../state";

function Otp() {
  const { userData, setUserData } = useStepperContext();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [event.target.name]: event.target.value });
    dispatch(updateOTPInformation({ [name]: value }));
  };

  return (
    <>
      <div className="text-center">
        <p className="text-gray-700 text-lg mb-8 text-4xl font-bold">
          Check your SMS for the O.T.P
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <input
              onChange={handleChange}
              value={userData.pin}
              name="pin"
              placeholder="e.g 27913456"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
