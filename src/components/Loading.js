import React from "react";

const Loading = () => {
  return (
    <div className="h-screen bg-gray-800 flex">
      <div className="wrapper m-auto ">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        {/* <span>Loading</span> */}
      </div>
    </div>
  );
};

export default Loading;
