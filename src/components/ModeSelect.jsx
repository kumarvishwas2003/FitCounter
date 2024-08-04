import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";


const ModeSelect = () => {
  const [exerciseEasy, setExerciseEasy] = useState(24);
  const [exerciseMedium, setExerciseMedium] = useState(15);
  const [exerciseHard, setExerciseHard] = useState(5);

  return (
    <>
      <div className="main bg-white w-full h-screen">
        <Navbar
          center={"Choose your level"}
          right={<FontAwesomeIcon icon={faQuestion} />}
        />

        <div className="mode-container px-8">
          <Link to="/Easy-Mode">
            <div className="easy bg-[#00FF38]/35 h-28  backdrop-blur-lg mt-5 rounded-lg font-medium text-xl flex flex-col justify-end pb-3 pl-3 shadow-lg">
              <div>Easy</div>
              <div className="text-sm">{`${exerciseEasy} Exercises`}</div>
            </div>
          </Link>

          <Link to="/Medium-Mode">
            <div className="medium bg-[#FAFF00]/35 h-28  backdrop-blur-lg mt-5 rounded-lg font-medium text-xl flex flex-col justify-end pb-3 pl-3 shadow-lg">
              <div>Medium</div>
              <div className="text-sm">{`${exerciseMedium} Exercises`}</div>
            </div>
          </Link>

          <Link to="/Hard-Mode">
            <div className="hard bg-[#FF0000]/35 h-28  backdrop-blur-lg mt-5 rounded-lg font-medium text-xl flex flex-col justify-end pb-3 pl-3 shadow-lg">
              <div>Hard</div>
              <div className="text-sm">{`${exerciseHard} Exercises`}</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ModeSelect;
