import React from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}
const Modal = ({ isOpen, children }: Props) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center">
      {children}
    </div>,
    document.body
  );
};

export default Modal;
