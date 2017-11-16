import React from 'react';
import playIcon from "./play.svg";

const PlayIcon = ({ onStart }) => (
  <img
    alt="play-icon"
    className="control-icon"
    onClick={onStart}
    src={playIcon}
  />
);

export default PlayIcon;
