import React, { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>Hi, click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={() => setOpenModal(!openModal)}>
        Open
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
