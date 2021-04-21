import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions/data";
import SongEl from "./SongEl";

const Songs = ({ getSongs, data, data: { songs, error } }) => {
  useEffect(() => {
    getSongs();
  }, []);

  return (
    <>
      {data &&
        (error ? (
          <h1>{error}</h1>
        ) : (
          songs &&
          songs.map((song) => {
            <SongEl song={song} />;
          })
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getSongs })(Songs);
