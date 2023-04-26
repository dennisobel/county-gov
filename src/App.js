import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home"
import SingleBusinessPermitReg from "./components/steps/SingleBusinessPermitReg";
import Login from "./components/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SingleBusinessPermitReg" element={<SingleBusinessPermitReg />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
