import "./SetCol.app.scss";
import React, { useState } from "react";

const ColorSet = () => {
  const [color, setColor] = useState("Red");

  function changedColor(e) {
    setColor(e.target.value);
  }
  const styleObj = {
    color: color,
  };
  return (
    <div className="container">
      <div className="square">
        <h1>Change Text Color With React</h1>

        <div className="header">
          <label>Color-{color}</label>
        </div>
        <input type="text" value={color} onChange={changedColor} ></input>
        <p style={styleObj}>
          ✔ React is a JavaScript library for building user interfaces.
          <br />
          ✔ Is used to build single-page applications.
          <br />✔ Allows us to create reusable UI components.
        </p>
      </div>
    </div>
  );
};

export default ColorSet;
