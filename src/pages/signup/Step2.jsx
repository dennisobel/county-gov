import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Step2 = ({ onPrevious, onNext, formData }) => {
  const [formData2, setFormData2] = useState({
    id: "",
    kra: "",
  });

  const handleChange = (event) => {
    setFormData2((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ id: formData2.id, kra: formData2.kra });
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
              Create an account: Identification
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Enter ID
                  </div>
                  <div className="bg-white my-1 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={formData2.id}
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
                      value={formData2.kra}
                      name="kra"
                      placeholder="e.g A0017000T00"
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

export default Step2;
