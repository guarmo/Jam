import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";

const SongEl = ({
  song: {
    name,
    artist_name,
    duration,
    likes,
    music_file_path,
    cover_image_path,
    song_release,
  },
}) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(new Audio(music_file_path));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="el bg-gray-800 rounded-3xl p-1.5 shadow-xl m-auto my-10 text-white">
      <div className="flex text-center z-10 relative">
        <div className="border-2 border-red-300">
          <img
            className="rounded-full m-auto w-40"
            src={cover_image_path}
            alt={`track artwork for ${name} by ${artist_name}`}
          />
          <h2 className="font-bold">{name}</h2>
          <h3 className="font-light mt-2">{artist_name}</h3>
        </div>
        <AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
      </div>
    </div>
  );
};

export default SongEl;
