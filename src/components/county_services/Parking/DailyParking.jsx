import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import zones from "./zones"

const DailyParking = () => {
  const [numberplate, setNumberPlate] = useState('');
  const [parkingdata, setParkingData] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleChange = (event) => {
    setParkingData({ ...parkingdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/profile")
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Number Plate
                </div>
                <input
                  type="text"
                  name="number_plate"
                  id="number_plate"
                  value={parkingdata.numberplate}
                  // onChange={(event) => setNumberPlate(event.target.value)}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Parking Zone
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white relative">
                  <select
                    onChange={handleChange}
                    value={parkingdata.zoneId}
                    name="code"
                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                  >
                    <option value="0">Parking Zone</option>
                    {zones.map((zone) => (
                      <option key={zone.code} value={zone.code}>
                        {zone.name}
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
              <button className="cursor-pointer rounded-lg bg-teal-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">Pay</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DailyParking