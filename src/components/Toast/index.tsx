import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration: number;
}

const Toast: React.FC<ToastProps> = ({ message, duration }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);

    const timer = setTimeout(() => {
      setShowToast(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 right-0 mb-4 mr-4 p-4 rounded-md bg-gray-800 text-white ${
        showToast ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      {message}
    </div>
  );
};

export default Toast;
