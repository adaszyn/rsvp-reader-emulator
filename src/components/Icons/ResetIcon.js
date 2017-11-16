import React from 'react';
import resetIcon from "./reset.svg";

const ResetIcon = ({ onReset }) => (
  <img
    alt="reset-icon"
    className="control-icon"
    onClick={onReset}
    src={resetIcon}
  />
);

export default ResetIcon;
