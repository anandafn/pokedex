import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] bg-white">
        <div className="flex p-4 justify-between items-center">
          <h3>Pokemon Info</h3>
          <button
            onClick={() => onClose()}
            className=" hover:bg-gray-300 px-3 py-1 hover:cursor-pointer hover:rounded"
          >
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
