import React from 'react'
import Navbar from './Navbar'

const ModeSelect = () => {
  return (
    <>
      <div className="main bg-zinc-950 w-full h-screen">
        <Navbar left={"Back"} center={"Choose your level"} right={"How to use"} />
      </div>
    </>
  );
}

export default ModeSelect