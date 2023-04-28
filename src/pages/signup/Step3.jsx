import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Step3 = ({ onPrevious, onNext, formData }) => {
  const [formData2, setFormData2] = useState({
    userType: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData2((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext(formData2);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          DRS
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account: Account Information
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Choose User Type
                  </div>
                  <div className="my-2 flex rounded border border-gray-200 bg-white relative">
                    <select
                      onChange={handleChange}
                      value={formData2.userType}
                      name="userType"
                      className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    >
                      <option value="web">User Type</option>
                      <option value="1">Resident</option>
                      <option value="2">Non-Resident</option>
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
                    Enter Password
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      type="password"
                      onChange={handleChange}
                      value={formData2.password}
                      name="password"
                      placeholder="••••••••"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Confirm Password
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      type="password"
                      onChange={handleChange}
                      value={formData2.confirmPassword}
                      name="confirmPassword"
                      placeholder="••••••••"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <button
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => onPrevious(formData)}
                  >
                    Prev
                  </button>
                </div>
                <div className="w-full mx-2 flex-1">
                  <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step3;
