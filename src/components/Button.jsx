import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full">
      <Link to="/signup">
        Get Started
      </Link>
    </button>
  );
};

export default Button;
