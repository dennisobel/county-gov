import { useStepperContext } from "../../contexts/StepperContext";
import { useDispatch } from "react-redux";
import { setSingleBusinessData } from "../../state";
import { useEffect, useState } from "react";

export default function BusinessActivity() {
  const { userData, setUserData } = useStepperContext();
  const [formValues,setFormValues] = useState({
    business_category:"",
    business_sub_category:"",
    business_description: "",
    no_of_employees: "",
    additional_activity: "",
    premise_size: ""
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
  return (
    <>
      <div className="text-center">
        <p className="text-gray-700 text-lg mb-1 text-4xl font-bold">
          Business Activity & Information
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase mb-1">
            business category
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["business_category"] || ""}
              name="business_category"
              placeholder="Health"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            business sub-category
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["business_sub_category"] || ""}
              name="business_sub_category"
              placeholder="Clinic"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Business Description
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <textarea
              onChange={handleChange}
              value={formValues["business_description"] || ""}
              name="business_description"
              placeholder="Enter business description"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Number of employees
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["no_of_employees"] || ""}
              name="no_of_employees"
              placeholder="0"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Additional activity if any (Optional)
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["additional_activity"] || ""}
              name="additional_activity"
              placeholder="Additional activity"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Premises Size (Area) in Sq. Metres
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["premise_size"] || ""}
              name="premise_size"
              placeholder="Premises Size (Area)"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </>
  );
}
