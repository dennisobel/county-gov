import { useStepperContext } from "../../contexts/StepperContext";
import { useDispatch } from "react-redux";
import { setSingleBusinessData } from "../../state";
import { useEffect, useState } from "react";

export default function BusinessContacts() {
  const { userData, setUserData } = useStepperContext();
  const dispatch = useDispatch()
  const [formValues,setFormValues] = useState({
    business_email:"",
    business_phone:"",
    postal_address: "",
    postal_code: "",
    contact_person_id: "",
    contact_person_role: "",
    contact_person_name: "",
    contact_person_email: "",
    contact_person_phone: ""
  })

  const handleChange = (e) => {
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
        <p className="text-gray-700 text-lg mb-8 text-4xl font-bold">
          Business Contacts
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Email
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["business_email"] || ""}
              name="business_email"
              placeholder="Enter email address"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Enter company phone number
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["business_phone"] || ""}
              name="business_phone"
              placeholder="Enter phone number"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Postal Address
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["postal_address"] || ""}
              name="postal_address"
              placeholder="Enter postal address"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Enter postal code
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["postal_code"] || ""}
              name="postal_code"
              placeholder="Enter postal code"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="text-center">
        <p className="text-gray-700 text-lg mb-8 text-4xl font-bold">
          Contact Person
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            National ID
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["contact_person_id"] || ""}
              name="contact_person_id"
              placeholder="eg 27912653"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Role in business
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["contact_person_role"] || ""}
              name="contact_person_role"
              placeholder="Role of contact person"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            First name of contact person
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["contact_person_name"] || ""}
              name="contact_person_name"
              placeholder="eg John Doe"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Email of contact person
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["contact_person_email"] || ""}
              name="contact_person_email"
              placeholder="eg john.doe@mail.com"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Phone number of contact person
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={formValues["contact_person_phone"] || ""}
              name="contact_person_phone"
              placeholder="eg 0712345678"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </>
  );
}
