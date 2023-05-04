import { Route, Routes, createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home"
import SingleBusinessPermitReg from "./components/steps/SingleBusinessPermitReg";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login"
import PassResetRequest from "./pages/forgot_pass/PassResetRequest";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
// import Otp from "./pages/otp/otp";
import Otp from "./pages/signup/pin"
import Reset from "./pages/password_reset/Reset";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact";
import Profile from "./pages/profile/Profile"
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import React from "react"


function App() {
  const {currentUser} = useContext(AuthContext);
  const [selectedService, setSelectedService] = React.useState("");

  console.log("SELECTED:",selectedService)

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar setSelectedService={setSelectedService}/>
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          {/* <RightBar /> */}
        </div>
        <Footer/>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    return children;
  };  

  const router = createBrowserRouter([
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Layout />
            {/* <Profile service={selectedService} /> */}
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/profile",
            element: <Profile service={selectedService} />
          },
          {
            path: "/profile/:id",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
  ])
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
