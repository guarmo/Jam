// @flow
import { GET_DATA, DATA_ERROR } from "./types";
import axios from "axios";

// Action
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
