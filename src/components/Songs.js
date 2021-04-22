import React from "react";
import { connect } from "react-redux";
import { getSongs, setLoading } from "../actions/data";
import SongEl from "./SongEl";

const Songs = ({ data: { songs, error, loading } }) => {
  return (
    <div className="w-1/2 m-auto">
      {!songs ? (
        loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>{error}</h1>
        )
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {songs.map((song, index) => (
            <SongEl key={index} index={index} song={song} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { setLoading, getSongs })(Songs);
