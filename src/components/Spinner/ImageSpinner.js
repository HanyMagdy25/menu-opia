import React from 'react';
import "./Spinner.css";
import imgSpin from "./../../assets/white-logo.png"

function ImageSpinner({ message }) {
  return (
    <div className="imageSpinner">
      <img src={imgSpin} alt='ImageSpinner'/>
    </div>
  );
}

export default ImageSpinner;