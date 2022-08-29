import React from "react";

import "./style.css";

const Button = ({ text, color = "", onClick }) => {
  return (
    <div className={`item ${color}`} onClick={() => onClick(text)}>
      {text}
    </div>
  );
};

export default Button;
