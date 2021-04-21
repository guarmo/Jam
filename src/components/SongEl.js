import React from "react";

const SongEl = ({ song: { name } }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default SongEl;
