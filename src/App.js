import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home"
import SingleBusinessPermitReg from "./components/steps/SingleBusinessPermitReg";
import Signup from "./components/Signup";
import Login from "./components/Login"
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SingleBusinessPermitReg" element={<SingleBusinessPermitReg />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
