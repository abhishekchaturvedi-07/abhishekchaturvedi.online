import React, { useEffect, useCallback, useState } from "react";

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose, children }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isVisible) {
      setShouldRender(true);
      timeoutId = setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      timeoutId = setTimeout(() => setShouldRender(false), 500); // Match transition duration
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("keydown", handleEscapeKey);
      return () => document.removeEventListener("keydown", handleEscapeKey);
    }
  }, [isVisible, handleEscapeKey]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out
        ${isAnimating ? "opacity-100" : "opacity-0"}`}
      onClick={onClose}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500
          ${isAnimating ? "bg-opacity-70" : "bg-opacity-0"}`}
      />

      {/* Content container */}
      <div
        className={`relative w-[90%] h-[90%] bg-slate-800 rounded-lg flex flex-col items-center justify-center p-8
          transition-all duration-500 ease-in-out transform
          ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* <div
          className={`w-full h-full flex flex-col items-center justify-center overflow-y-auto
          transition-opacity duration-500
          ${isAnimating ? "opacity-100" : "opacity-0"}`}
        > */}
        <div
          className={`w-full h-full flex flex-col items-center  mt-10 p-10   overflow-y-auto
          transition-opacity duration-500
          ${isAnimating ? "opacity-100" : "opacity-0"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
