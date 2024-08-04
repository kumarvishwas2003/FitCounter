import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";


import { Link } from 'react-router-dom';
const Navbar = ({center,right}) => {
  return (
    <div className="top-0 bg-[#F8EDED] text-black w-full h-16 flex justify-between items-center text-2xl font-bold">
      <div className="leftbtn ml-4">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-3xl" />
        </Link>
      </div>
      <div className="font-bold">{center}</div>
      <div className="rightbtn mr-5">
        <Link to={"/Howtouse"}>
          <div className="text-3xl font-extrabold">
            {right}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar

//  