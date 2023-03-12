import React from "react";

type ButtonProps = {
  typeOf?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  typeOf = "button",
  text,
  onClick,
}) => {
  return (
    <button type={typeOf} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
