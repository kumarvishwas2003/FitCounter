import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ExerciseCard from './ExerciseCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";


const EasyMode = () => {
  const [data, setData] = useState("hello")
  // const [exerciseNo,setExerciseNo] = useState(0)
  useEffect(() => {
    fetch('/exercise.json')
      .then(response => response.json())
    .then(data=>setData(data))
  }, [])
  
  return (
    <div className="main bg-white w-full h-screen">
      <Navbar
        center={"Choose your Exercises"}
        right={<FontAwesomeIcon icon={faFilter} />}
      />
      <div className="exercise-container pt-4 px-8 flex justify-evenly gap-10">
        
        {/* <ExerciseCard /> */}
        {/* <ExerciseCard /> */}
        {console.log(data)}
        <div className="text-3xl text-blue-700 font-bold">
        </div>
      </div>
    </div>
  );
}

export default EasyMode