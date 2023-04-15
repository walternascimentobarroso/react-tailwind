import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration: number;
  type?: "danger" | "warning" | "success" | "info";
}

const Toast: React.FC<ToastProps> = ({ message, duration, type = "info" }) => {
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

  let bgColor = "";
  switch (type) {
    case "danger":
      bgColor = "bg-red-500";
      break;
    case "warning":
      bgColor = "bg-yellow-500";
      break;
    case "success":
      bgColor = "bg-green-500";
      break;
    case "info":
    default:
      bgColor = "bg-blue-500";
      break;
  }

  return (
    <div
      className={`fixed top-0 right-0 mt-20 mr-4 p-4 rounded-md text-white ${bgColor} ${
        showToast ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 z-30`}
    >
      {message}
    </div>
  );
};

export default Toast;
