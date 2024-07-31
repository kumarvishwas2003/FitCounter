import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = ({left,center,right}) => {
  return (
    <div className="top-0 bg-zinc-950 text-white w-full h-10 flex justify-between items-center">
      <div className="leftbtn p-2 font-semibold bg-purple-800 ml-2 mt-2 rounded-md">
        <Link to={"/"}>{left}</Link>
      </div>
          <div className="font-bold mt-2">{center}</div>
      <div className="rightbtn p-2 font-semibold bg-purple-800 mr-2 mt-2 rounded-md">
        <Link to={"/Howtouse"}>{right}</Link>
      </div>
    </div>
  );
}

export default Navbar