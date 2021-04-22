import React, { useState, useEffect, useRef } from "react";
import { BsPlay, BsPause, BsHeart, BsHeartFill } from "react-icons/bs";
import { useAlert } from "react-alert";

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
  const alert = useAlert();
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

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
    <div className="songEl w-full p-1.5 shadow-2xl p-5 text-white text-center">
      <div style={{ minHeight: "80%" }} className="">
        <img
          className="m-auto min-w-3/4"
          src={cover_image_path}
          alt={`track artwork for ${name} by ${artist_name}`}
        />
        <div className="flex items-center justify-center my-2 p-2">
          <div className=" w-full">
            <h2 className="font-bold">{name}</h2>
            <h3 className="font-light">{artist_name}</h3>
          </div>
          <div className="">
            {liked ? (
              <>
                <BsHeartFill
                  className="cursor-pointer"
                  onClick={() => {
                    alert.show("Track unliked!");
                    setLiked(false);
                  }}
                />
              </>
            ) : (
              <>
                <BsHeart
                  className="cursor-pointer"
                  onClick={() => {
                    alert.show("Track liked!");
                    setLiked(true);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {/* Controls */}
      <div className="flex justify-center items-center text-6xl">
        {isPlaying ? (
          <BsPause
            className="cursor-pointer"
            onClick={() => setIsPlaying(false)}
          />
        ) : (
          <BsPlay
            className="cursor-pointer"
            onClick={() => setIsPlaying(true)}
          />
        )}
      </div>
    </div>
  );
};

export default SongEl;
