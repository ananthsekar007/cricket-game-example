import React from "react";

const ButtonComponent = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`text-white rounded-full ${props.className}`}
    >
      {props.buttonText}
    </button>
  );
};

export default ButtonComponent;
