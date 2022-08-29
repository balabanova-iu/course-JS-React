import React from "react";

import "./style.css";

const Resultss = ({ results }) => {
  return (
    <ul className="resultss">
      Story:
      {results.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default Resultss;
