import { useEffect } from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { useSelector, useDispatch } from 'react-redux';
import { updateIdentification } from "../../state";

export default function Identification() {
  const { userData, setUserData } = useStepperContext();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [event.target.name]: event.target.value });
    dispatch(updateIdentification({ [name]: value }));
  };

  return (
    <>
      <div className="text-center">
        <p className="text-gray-700 text-lg mb-8 text-4xl font-bold">
          Identification
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Enter ID
                  </div>
                  <div className="bg-white my-1 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData.id}
                      name="id"
                      placeholder="e.g 27913456"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Enter KRA Number
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData.kra}
                      name="kra"
                      placeholder="e.g A0017000T00"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>
    </>
  );
}
