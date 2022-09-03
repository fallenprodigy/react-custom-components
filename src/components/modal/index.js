import React from "react";
import "./Modal.css";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Continue?</h1>
        </div>
        <div className="body">
          <p>
            The next page is awesome! You should move forward, you will enjoy
            it!
          </p>
        </div>
        <div className="footer">
          <button onClick={() => setOpenModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
