import { useEffect, useState } from "react";

const TopButton: any = ({ passRef }: any) => {
  const [show, setShow] = useState(false);

  const checkScroll = () =>
    passRef.current && setShow(passRef.current.scrollTop > 0);

  useEffect(() => {
    passRef.current && passRef.current.addEventListener("scroll", checkScroll);
  }, [passRef]);

  const scrollToTop = () => {
    passRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={() => scrollToTop()}
          className="fixed bottom-4 right-4 z-50 p-2 rounded-full 
          custom--bg hover:bg-gray-200 dark:hover:bg-gray-600"
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
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default TopButton;
