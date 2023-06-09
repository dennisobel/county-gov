import { useStepperContext } from "../../contexts/StepperContext";
import { useDispatch } from "react-redux";
import { setSingleBusinessData } from "../../state";
import { useEffect, useState } from "react";

export default function BusinessCategory() {
  const { userData, setUserData } = useStepperContext();
  const dispatch = useDispatch()
  const [formValues,setFormValues] = useState({
    applicationType:"",
    registered:""
  })

  

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUserData({ ...userData, [name]: value });
    e.preventDefault()
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
    dispatch(setSingleBusinessData(formValues))
  },[formValues])

  return (
    <>
      <div className="text-center">
        <p className="text-gray-700 text-lg mb- text-4xl font-bold">
          Business Category
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Application Type
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={formValues["applicationType"] || ""}
              name="applicationType"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="">Choose Application Type</option>
              <option value="new">New</option>
              <option value="ammendment">Ammendment</option>
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

        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Is your business already registered
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={formValues["registered"] || ""}
              name="registered"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="">Registered</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
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

        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Terms and Conditions
          </div>

          <div className="my-2 flex flex-col">
            <p className="my-1">
              1. By using this county business registration app, you agree to
              comply with all applicable laws and regulations.
            </p>
            <p className="my-1">
              2. You understand that the information you provide through this
              app will be used to register your business with the county.
            </p>
            <p className="my-1">
              3. You acknowledge that any false or misleading information
              provided through this app may result in penalties or legal action.
            </p>
            <p className="my-1">
              4. You agree to keep your account information secure and
              confidential, and to notify the county immediately if you suspect
              any unauthorized access to your account.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
