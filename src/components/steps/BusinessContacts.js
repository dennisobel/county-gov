import { useStepperContext } from "../../contexts/StepperContext";

export default function BusinessContacts() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

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
              value={userData["email"] || ""}
              name="email"
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
              value={userData["phonenumber"] || ""}
              name="phonenumber"
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
              value={userData["address"] || ""}
              name="address"
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
              value={userData["postalcode"] || ""}
              name="postalcode"
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
              value={userData["id"] || ""}
              name="id"
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
              value={userData["role"] || ""}
              name="role"
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
              value={userData["firstname"] || ""}
              name="firstname"
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
              value={userData["contactpersonEmail"] || ""}
              name="contactpersonEmail"
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
              value={userData["contactpersonNumber"] || ""}
              name="contactpersonNumber"
              placeholder="eg 0712345678"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </>
  );
}
