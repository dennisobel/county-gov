import { useStepperContext } from "../../contexts/StepperContext";

export default function BusinessDetails() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Enter business name
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["card"] || ""}
              name="card"
              placeholder="Enter Business Name"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Enter subsidiary name (e.g Westlands Branch)
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["card"] || ""}
              name="card"
              placeholder="e.g Mavindini Branch "
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Street/Estate Name
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["city"] || ""}
              name="city"
              placeholder="e.g Yinthungu"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Select sub-county
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={userData["applicationType"] || ""}
              name="subcounty"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="web">Makueni Constituency</option>
              <option value="mobile">Mbooni Constituency</option>
              <option value="mobile">Kibwezi East Constituency</option>
              <option value="mobile">Kibwezi West Constituency</option>
              <option value="mobile">Kaiti Constituency</option>
              <option value="mobile">Kilome Constituency</option>
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
            Select ward
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white relative">
            <select
              onChange={handleChange}
              value={userData["applicationType"] || ""}
              name="subcounty"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            >
              <option value="web">Mavindini</option>
              <option value="mobile">Kitise</option>
              <option value="mobile">Ukia</option>
              <option value="mobile">Wote</option>
              <option value="mobile">Mbiuni</option>
              <option value="mobile">Mbitini</option>
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
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Plot/LR No
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["card"] || ""}
              name="card"
              placeholder="Enter Plot Number"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Building Name
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["city"] || ""}
              name="city"
              placeholder="Enter Building Name"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Floor No (Optional)
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["card"] || ""}
              name="card"
              placeholder="Enter Floor Number"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Room Stall Number (Optional)
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["city"] || ""}
              name="city"
              placeholder="Enter Room Number"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </>
  );
}
