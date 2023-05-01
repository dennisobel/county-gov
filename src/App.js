import { Route, Routes, createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home"
import SingleBusinessPermitReg from "./components/steps/SingleBusinessPermitReg";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login"
import PassResetRequest from "./pages/forgot_pass/PassResetRequest";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Otp from "./pages/otp/otp";
import Reset from "./pages/password_reset/Reset";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact";
import Profile from "./pages/profile/Profile"
import { useContext } from "react";
import { AuthContext } from "./context/authContext";


function App() {
  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          {/* <RightBar /> */}
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    // if (!currentUser) {
      // return <Navigate to="/login" />;
    // }

    return children;
  };  

  const router = createBrowserRouter([
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          // {
          //   path: "/profile/:id",
          //   element: <Profile />,
          // },
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
    // <>    
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/otp" element={<Otp />} />
    //     <Route path="/reset" element={<Reset />} />
    //     <Route path="/request_reset" element={<PassResetRequest />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/SingleBusinessPermitReg" element={<SingleBusinessPermitReg />} />
    //   </Routes>
    //   <Footer/>
    // </>
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
