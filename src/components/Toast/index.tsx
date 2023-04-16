import React, { useCallback, useEffect } from "react";

interface ToastItem {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
}

interface ToastProps {
  toastlist: ToastItem[];
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  setList: (toastList: ToastItem[]) => void;
}

const Toast: React.FC<ToastProps> = ({ toastlist, position, setList }) => {
  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <div
      className={`fixed z-30 
                ${position === "top-right" && "top-4 right-4"}
                ${position === "top-left" && "top-4 left-4"}
                ${position === "bottom-right" && "bottom-4 right-4"}
                ${position === "bottom-left" && "bottom-4 left-4"}
                `}
    >
      {toastlist.map((toast, i) => (
        <div
          key={i}
          className={`mb-4 rounded-md shadow-md text-black opacity-90 transition duration-300 hover:shadow-lg ${toast.backgroundColor}`}
        >
          <button
            className={`float-right bg-transparent border-none text-white opacity-80 cursor-pointer p-2`}
            onClick={() => deleteToast(toast.id)}
          >
            X
          </button>
          <div className="flex items-center p-2">
            <p className="font-semibold text-lg">{toast.title}</p>
          </div>
          <div className="p-2">
            <p className="text-sm">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
