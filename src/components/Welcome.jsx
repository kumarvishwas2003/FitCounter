import React from 'react'
const Welcome = () => {
  return (
    <>
      <div className="wholebody h-screen w-screen flex justify-center items-center bg-zinc-950 text-white font-roboto p-4">
        <div className="main-container w-96 h-96 flex flex-col justify-between mb-24">
          <div className="logo-div flex justify-center items-center ">
            <img src="./public/images/logo.png" alt="" className="w-28 h-28" />
          </div>
          <div className="text-container">
            <p className="text-6xl font-semibold p-2 font-roboto">
              Hello,
              <br />
              Welcome To <br />
              <span className="font-extrabold text-purple-700">FitCounter</span>
            </p>
          </div>
          <div className="nav-btn flex justify-evenly p-3">
            <button className="p-2 bg-purple-700 rounded-md font-bold">
              Get Started
            </button>
            <button className="p-2 bg-purple-600 rounded-md font-bold">
              How to Use ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome