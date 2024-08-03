import React from "react";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="">
          <img
            src="./public/images/body-builder.jpg"
            alt=""
            className="bg-contain rounded-b-[38px]"
          />
        </div>
        <div className="text-container w-full text-[48px] text-center">
          <p>
            Hello,
            <br /> Welcome To <br />
            <span className="text-[#FF8225]  font-bold">Fit-Counter</span>
          </p>
        </div>
        <div className="btn-container flex justify-evenly mt-5">
          <Link to="/ModeSelect">
            <button className="p-3 bg-[#173B45] rounded-sm font-normal text-[19px] text-white">
              Get Started
            </button>
          </Link>
          <Link to="/Howtouse">
            <button className="p-3 bg-[#173B45] rounded-sm font-normal text-[19px] text-white">
              How to Use ?
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;


{/* <Link to="/ModeSelect">
              <button className="p-2 bg-[#686D76] rounded-md font-bold hover:bg-[#DC5F00]">
                Get Started
              </button>
            </Link>
            <Link to="/Howtouse">
              <button className="p-2 bg-[#686D76] rounded-md font-bold hover:bg-[#DC5F00]">
                How to Use ?
              </button>
            </Link> */}