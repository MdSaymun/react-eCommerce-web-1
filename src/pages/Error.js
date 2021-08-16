import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex">
      <div className="content m-auto">
        <h1 className="text-4xl">404 page not found</h1>
        <button className="bg-gray-300  py-1 px-4 rounded-sm block mx-auto mt-3">
          <Link to="/">Go to home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
