import React from 'react'

const ExerciseCard = ({name,id}) => {
  return (
    <>
      <div className="w-[120px] h-[120px] bg-[#E7EEFF] rounded-lg flex justify-center items-center">
        <div className="text-2xl font-bold">{name}</div>
      </div>
    </>
  );
}

export default ExerciseCard