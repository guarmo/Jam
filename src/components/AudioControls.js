import React from "react";
import { BsPlay, BsPause, BsHeart, BsHeartFill } from "react-icons/bs";

const AudioControls = ({ isPlaying, onPlayPauseClick }) => (
  <div className="flex justify-center items-center text-2xl">
    {isPlaying ? (
      <BsPause onClick={() => onPlayPauseClick(false)} />
    ) : (
      <BsPlay onClick={() => onPlayPauseClick(true)} />
    )}
    <BsHeart />
  </div>
);

export default AudioControls;
