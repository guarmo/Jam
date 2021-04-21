import { GET_DATA } from "./types";
import axios from "axios";

// Action
export const getSongs = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api-stg.jam-community.com/song/trending"
    );

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
