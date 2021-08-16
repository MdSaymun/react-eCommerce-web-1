import React from "react";
import { useGlobalContext } from "../utils/context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { isModalOpen, closeModal, productId, data } = useGlobalContext();
  // console.log(productId);

  return (
    <div className={`modal-container inset-0 w-full h-full ${isModalOpen ? "block" : "hidden"}`}>
      <div onClick={closeModal} className={` modal-bg fixed inset-0 block transition-opacity bg-black opacity-50 `} />
      <div className="modal-content-container absolute z-50">
        <div className="modal-info bg-white relative p-20">
          {productId &&
            data.map((item) =>
              item.id === productId ? (
                <div>
                  <img src={item.image} alt="" className=" w-2/3 mx-auto" />
                </div>
              ) : null
            )}
          <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
