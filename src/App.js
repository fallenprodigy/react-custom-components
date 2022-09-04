import React, { useState } from "react";
import Dropdown from "./components/dropdown/Dropdown";
import Modal from "./components/modal";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>Hi, click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={() => setOpenModal(!openModal)}>
        Open
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <Dropdown title="Select movie" items={items} />
    </div>
  );
}

export default App;
