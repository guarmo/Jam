import { GET_DATA, DATA_ERROR } from "../actions/types";

// Create initial state
const initialState = {
  songs: null,
  error: null,
};

export default function alert(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        songs: payload,
      };
    case DATA_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
