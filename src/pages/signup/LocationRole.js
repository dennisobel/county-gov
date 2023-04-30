import { useEffect } from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { useSelector, useDispatch } from 'react-redux';
import { updateLocationRole } from "../../state";
import counties from "./counties";

export default function LocationRole() {
  const { userData, setUserData } = useStepperContext();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [event.target.name]: event.target.value });
    dispatch(updateLocationRole({ [name]: value }));
  };

  return (
    <>
      <div className="text-center">
        <p className="text-gray-700 text-lg mb-8 text-4xl font-bold">
          Location & Role
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Choose County
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={userData.countyId}
              name="countyId"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="0">County</option>
              {counties.map((county) => (
                <option key={county.code} value={county.code}>
                  {county.name}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-0 bottom-0 w-8 flex items-center justify-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 7.293a1 1 0 0 0-1.414-1.414L10 8.586 6.121 4.707a1 1 0 0 0-1.414 1.414l4.95 4.95a1 1 0 0 0 1.414 0l4.95-4.95a1 1 0 0 0 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Choose Role
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={userData.roleId}
              name="roleId"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="0">Role</option>
              <option value="1">Administrator</option>
              <option value="2">Client</option>
              <option value="2">Revenue Officer</option>
            </select>
            <div className="absolute right-0 top-0 bottom-0 w-8 flex items-center justify-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 7.293a1 1 0 0 0-1.414-1.414L10 8.586 6.121 4.707a1 1 0 0 0-1.414 1.414l4.95 4.95a1 1 0 0 0 1.414 0l4.95-4.95a1 1 0 0 0 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
