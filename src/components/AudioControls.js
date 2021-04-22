import React from "react";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Pause } from "../assets/pause.svg";

const AudioControls = ({ isPlaying, onPlayPauseClick }) => (
  <div className="border-2 border-red-300 audio-controls my-auto">
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <div class="heart"></div>
  </div>
);

export default AudioControls;
