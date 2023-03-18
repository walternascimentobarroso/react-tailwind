const Button: any = ({ typeOf = "button", children, onClick }: any) => {
  return (
    <button
      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      type={typeOf}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
