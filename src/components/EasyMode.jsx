import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ExerciseCard from "./ExerciseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const EasyMode = () => {

  const [data, setData] = useState("hello");
  // const [exerciseNo,setExerciseNo] = useState(0)

const easyExercise = {
  "Easy": [
    {
      "id": 1,
      "name": "Walking",
      "level": "Easy",
      "Equipment": "None",
      "Good for": "Cardio, Weight Loss",
      "Calorie burnt in 1 min": "4",
      "Recommended Time": "30 minutes"
    },
    {
      "id": 2,
      "name": "Stretching",
      "level": "Easy",
      "Equipment": "None",
      "Good for": "Flexibility, Relaxation",
      "Calorie burnt in 1 min": "2",
      "Recommended Time": "10 minutes"
    },
    {
      "id": 3,
      "name": "Yoga",
      "level": "Easy",
      "Equipment": "Mat",
      "Good for": "Flexibility, Balance",
      "Calorie burnt in 1 min": "3",
      "Recommended Time": "30 minutes"
    },
    {
      "id": 4,
      "name": "Swimming (light)",
      "level": "Easy",
      "Equipment": "Pool",
      "Good for": "Cardio, Full Body",
      "Calorie burnt in 1 min": "6",
      "Recommended Time": "20 minutes"
    },
    {
      "id": 5,
      "name": "Dancing (slow)",
      "level": "Easy",
      "Equipment": "None",
      "Good for": "Cardio, Coordination",
      "Calorie burnt in 1 min": "5",
      "Recommended Time": "20 minutes"
    }
  ]
}


  return (
    <div className="main bg-white w-full h-screen">
      <Navbar
        center={"Choose your Exercises"}
        right={<FontAwesomeIcon icon={faFilter} />}
      />
      
        <div className="exercise-container flex flex-wrap gap-5 p-4">
          {easyExercise.Easy.map((value) => {
            return <ExerciseCard name={value.name} key={value.id} />;
          })}
        </div>
    
    </div>
  );
};

export default EasyMode;
