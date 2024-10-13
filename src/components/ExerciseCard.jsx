import React from 'react'
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const ExerciseCard = ({ name, id }) => {
   let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);

   function openModal() {
     setIsOpen(true);
   }

   function afterOpenModal() {
     // references are now sync'd and can be accessed.
     subtitle.style.color = "#f00";
   }

   function closeModal() {
     setIsOpen(false);
   }


  return (
    <>
      <div
        className="w-[120px] h-[120px] bg-[#E7EEFF] rounded-lg flex justify-center items-center"
        onClick={openModal}>
        <div className="text-2xl font-bold">{name}</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{name}</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
}

export default ExerciseCard