import React, { useState, useEffect } from "react";

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  // Update the angle value when user types in the text box
  const handleTextChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > 360) {
      value = 360;
    }
    setAngle(value);
  };

  // Update the angle value when user changes the slider
  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  // Update the angle value when user selects a radio button
  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      {/* Text Box */}
      <div>
        <label>
          Angle :
          <input
            type="number"
            value={angle}
            onChange={handleTextChange}
            min="0"
            max="360"
          />
        </label>
      </div>

      {/* Slider */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
        />
      </div>

      {/* Radio Buttons */}
      <div>
        { [0, 45, 60, 90, 180].map((value) => (
          <label key={value} style={{ marginRight: "15px" }}>
            <input
              type="radio"
              value={value}
              checked={angle === value}
              onChange={handleRadioChange}
            />
            {value}°
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;
