import { useStepperContext } from "../../contexts/StepperContext";

export default function BusinessActivity() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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
            Select business category
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={userData["applicationType"] || ""}
              name="subcounty"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="web">Select business category</option>
              <option value="mobile">Hospitality</option>
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
            Select business sub-category
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={userData["applicationType"] || ""}
              name="subcounty"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="web">Select business sub-category</option>
              <option value="mobile">Hotel</option>
              <option value="mobile">Bed & Breakfast</option>
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

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Business Description
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <textarea
              onChange={handleChange}
              value={userData["businessDescription"] || ""}
              name="businessDescription"
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
              value={userData["card"] || ""}
              name="card"
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
              value={userData["card"] || ""}
              name="card"
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
              value={userData["exp"] || ""}
              name="exp"
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
