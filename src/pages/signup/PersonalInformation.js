import { useStepperContext } from "../../contexts/StepperContext";
import { useSelector, useDispatch } from 'react-redux';
import { updatePersonalInformation } from "../../state";
import { useEffect } from "react";

export default function PersonalInformation() {
  const { userData, setUserData } = useStepperContext();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [event.target.name]: event.target.value });
    dispatch(updatePersonalInformation({ [name]: value }));
  };

  return (
    <>
      <div className="text-center">
        <p className="text-gray-700 text-lg mb- text-4xl font-bold">
          Personal Information
        </p>
      </div>
      <div className="flex flex-col ">
        {/* <div className="mx-1 w-full flex-1">
          <div className="mt-1 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Disclaimer
          </div>
          <div className="my-1 flex flex-col bg-red-100 text-red-700 rounded p-2">
            <p className="my-1">
              Please note that this form is for demonstration purposes only.
            </p>
          </div>
        </div> */}

        <div className="w-full mx-1 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Enter Name
          </div>
          <div className="bg-white my-1 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData.name}
              name="name"
              placeholder="e.g John Doe"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Enter Phone Number
          </div>
          <div className="bg-white my-1 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData.msisdn}
              name="msisdn"
              placeholder="e.g 0712345678"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Enter Email
          </div>
          <div className="bg-white my-1 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData.email}
              name="email"
              placeholder="name@company.com"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </>
  );
}
