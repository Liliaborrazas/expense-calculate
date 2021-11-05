import React from "react";

type ButtonProps = {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({ label, type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;