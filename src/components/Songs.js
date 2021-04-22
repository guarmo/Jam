import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSongs, setLoading } from "../actions/data";
import SongEl from "./SongEl";

const Songs = ({ data: { songs, error, loading } }) => {
  return (
    <div data-testid="songs" className="w-1/2 m-auto">
      {!songs ? (
        loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>{error}</h1>
        )
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {songs &&
            songs.map((song, index) => (
              <SongEl key={index} index={index} song={song} />
            ))}
        </div>
      )}
    </div>
  );
};

Songs.propTypes = {
  setLoading: PropTypes.func.isRequired,
  getSongs: PropTypes.func.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { setLoading, getSongs })(Songs);
