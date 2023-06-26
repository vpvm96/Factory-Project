import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onClose();
  };

  const handleInsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      onClick={handleOutsideClick}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <div
          onClick={handleInsideClick}
          className="relative z-10 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >
              <span className="sr-only">Close</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
