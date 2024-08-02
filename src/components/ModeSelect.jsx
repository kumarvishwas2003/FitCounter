import React from 'react'
import Navbar from './Navbar'

const ModeSelect = () => {
  return (
    <>
      <div className="main bg-[#373A40] w-full h-screen">
        <Navbar
          left={"Back"}
          center={"Choose your level"}
          right={"How to use"}
        />
        <div className="mode-container mt-7 ml-9 grid grid-rows-1 gap-4">
          <div className="easy w-28 h-28 bg-green-600 flex justify-center items-center rounded-md text-white">
            <img src="" alt="" />
            Easy
          </div>
          <div className="easy w-48 h-28 bg-yellow-600 flex justify-center items-center rounded-md text-white">
            Medium
          </div>
          <div className="easy w-64 h-28 bg-red-700 flex justify-center items-center rounded-md text-white">
            Hard
          </div>
        </div>
      </div>
    </>
  );
}

export default ModeSelect