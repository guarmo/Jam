import React from "react";

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
  return (
    <div className="border-2 border-black">
      <h1>Name: {name}</h1>
      <h1>Artist: {artist_name}</h1>
      <h1>Duration: {duration}</h1>
      <h1>Likes: {likes}</h1>
      <h1>Path: {music_file_path}</h1>
      <h1>Cover image: {cover_image_path}</h1>
      <h1>Release date: {song_release}</h1>
    </div>
  );
};

export default SongEl;
