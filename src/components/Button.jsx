import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
      <Link to="/login">
        Get Started
      </Link>
    </button>
  );
};

export default Button;
