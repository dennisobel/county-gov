import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

import { useSignupMutation } from "../../state/api";

function Signup() {
  const [formData, setFormData] = useState({
    msisdn: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: "",
    kra: "",
    userType: "",
    countyId: "",
    roleId: "",
  });

  const [passwordError, setPasswordError] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const [signup, { isLoading, isError, error }] = useSignupMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword && termsAccepted) {
      signup(formData)
        .unwrap()
        .then((res) => {
          console.log("user successfully created");
        })
        .catch((error) => {
          console.error("Error signing up user: ", error);
        });
    } else {
      console.error("Passwords do not match");
      setPasswordError(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "termsAccepted") {
      setTermsAccepted(event.target.checked);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
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
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Enter Name
                  </div>
                  <div className="bg-white my-1 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={formData.name}
                      name="name"
                      placeholder="e.g John Doe"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Enter Phone Number
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={formData.msisdn}
                      name="msisdn"
                      placeholder="e.g 0712345678"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Enter Email
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={formData.email}
                      name="email"
                      placeholder="name@company.com"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    ID Number
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={formData.id}
                      name="id"
                      placeholder="Enter ID Number"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    KRA Number
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={formData.kra}
                      name="kra"
                      placeholder="Enter KRA Number"
                      type="text"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    aria-describedby="terms"
                    checked={termsAccepted}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <Link
                      to=""
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full"
                type="submit"v
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Create an account"}
              </button>
              {isError && <p>Error: {error.message}</p>}
              {passwordError && <p>Passwords do not match</p>}
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  className="font-bold text-primary-600 hover:underline dark:text-primary-500"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
