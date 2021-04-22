// @flow
import { GET_DATA, DATA_ERROR, SET_LOADING, LIKE_SONG } from "./types";
import axios from "axios";

// Get songs
export const getSongs: function = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api-stg.jam-community.com/song/trending"
    );

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: err.message,
    });
  }
};

// Like song
export const likeSong: function = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8&id=${id}`
    );

    dispatch({
      type: LIKE_SONG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: err.error,
    });
  }
};

// Set loading
export const setLoading: function = (bool) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: bool,
  });
};
