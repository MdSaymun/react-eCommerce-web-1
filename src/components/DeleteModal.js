import React from "react";
import { useGlobalContext } from "../utils/context";

const DeleteModal = () => {
  const { isDeleteModal, deleteMsg, closeDeleteModal, removeCartItem } = useGlobalContext();
  // console.log(isDeleteModal, deleteMsg);
  return (
    <div className={`delete-modal-container w-full h-full ${isDeleteModal ? "block" : "hidden"}`}>
      <div onClick={closeDeleteModal} className={` modal-bg fixed inset-0  transition-opacity z-10 bg-black opacity-50 ${isDeleteModal ? "block" : "hidden"} `} />
      <div className="delete-modal-content-container absolute z-50">
        <div className="modal-info bg-white relative p-20">
          <p>{deleteMsg}</p>
          <div className="deleteModal-buttons flex items-center justify-center mt-3">
            <button
              className="bg-gray-200 py-1 px-3 rounded-md
            "
              onClick={closeDeleteModal}
            >
              No
            </button>
            <button onClick={removeCartItem} className="bg-red-500 text-white py-1 px-3 mx-3 rounded-md ">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
