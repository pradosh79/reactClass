import React, { useState } from "react";

export default function UseStateColorPick() {

  const [color, setColor] = useState('red');
  const colors = [
    { label: "Red", value: "#ff0000" },
    { label: "Green", value: "#00ff00" },
    { label: "Blue", value: "#0000ff" },
    { label: "Yellow", value: "#ffff00" },
  ];

  const onChangeFun = (e) => {
    setColor(e.target.value);
  };

  console.log(color, "color");

  return (
    <>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uB2rhjulY4Q"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe> */}

      <select value={color} onChange={onChangeFun}>
        {colors.map((color) => (
          <option value={color.value}>{color.label}</option>
        ))}
      </select>
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </>
  );
}