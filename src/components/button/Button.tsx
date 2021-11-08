import React from "react";
import './Button.css';

type ButtonProps = {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({ label, type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className="button">
      {label}
    </button>
  );
}

export default Button;