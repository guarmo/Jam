import React, { useState, useEffect, useRef } from "react";
import { BsPlay, BsPause, BsHeart, BsHeartFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
import { likeSong } from "../actions/data";

const SongEl = ({
  likeSong,
  song: { id, name, artist_name, music_file_path, cover_image_path },
}) => {
  const alert = useAlert();
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  const audioRef = useRef(new Audio(music_file_path));

  // On like
  const onLike = (id) => {
    alert.show("Track liked!");
    setLiked(true);
    console.log("like", id);
    likeSong(id);
  };

  // On unlike
  const onUnlike = () => {
    alert.show("Track unliked!");
    setLiked(false);
    console.log("hit unlike route");
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div
      data-testid="songEl"
      className="songEl w-full p-1.5 shadow-2xl p-5 text-white text-center"
    >
      <div style={{ minHeight: "80%" }} className="">
        <img
          className="m-auto min-w-3/4"
          src={cover_image_path}
          alt={`track artwork for ${name} by ${artist_name}`}
        />
        <div className="flex items-center justify-center my-2 p-2">
          <div className=" w-full">
            <h2 className="font-bold uppercase">{name}</h2>
            <h3 className="font-thin uppercase">{artist_name}</h3>
          </div>
          <div className="">
            {liked ? (
              <>
                <BsHeartFill
                  className="cursor-pointer"
                  onClick={() => onUnlike()}
                />
              </>
            ) : (
              <>
                <BsHeart
                  className="cursor-pointer"
                  onClick={() => onLike(id)}
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

SongEl.propTypes = {
  likeSong: PropTypes.func.isRequired,
};

export default connect(null, { likeSong })(SongEl);
