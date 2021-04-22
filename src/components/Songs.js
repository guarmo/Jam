import React from "react";
import { connect } from "react-redux";
import { getSongs, setLoading } from "../actions/data";
import SongEl from "./SongEl";

const Songs = ({ data: { songs, error, loading } }) => {
  return (
    <div className="">
      {!songs ? (
        loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>{error}</h1>
        )
      ) : (
        songs.map((song, index) => <SongEl key={index} song={song} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { setLoading, getSongs })(Songs);
