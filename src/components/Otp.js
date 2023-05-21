import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { verifyPassword } from "../helper/helper";
import { setLogin } from "../state";
import { generateOTP, verifyOTP, getUsername } from "../helper/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

function Otp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    code: "",
  });

//   const login = useSelector((state) => state.signup.login);

  const [user, setUser] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    getUsername().then((res) => {
      dispatch(setLogin(res));
      setUser(res);
      const email = res?.email;
      if (email) {
        generateOTP(email).then((OTP) => {
          console.log(OTP);
          if (OTP) toast.success("OTP has been send to your email!");
          toast.error("Problem while generating OTP!");
        });
      } else {
        console.log("email not found");
      }
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { status } = await verifyOTP({ email: user.email, code: formValues.code  })
    if(status === 201){
      toast.success('Verify Successfully!')
      return navigate('/profile')
    }  
  };

  return (
    <>
      <ToastContainer />
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                OTP Has been sent to your phone. Please Verify
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    for="code"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formValues.code}
                    onChange={handleChange}
                    id="code"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Otp;
